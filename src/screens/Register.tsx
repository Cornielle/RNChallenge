import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { Button } from'react-native-elements';
import { Register as RegisterStyles } from '../styles';
import InputComponent from '../components/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import { LoginProp } from '../types/Login';

const dummyLoginData = {
    email: "hello@gmail.com",
    password: "blakbleu.1"
}

/*Yum Schema*/
const loginValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Please enter valid email')
        .required('Email address is required'),
    password: yup.string()
        .min(6, ({min})=>`Password must be at least ${min} characters`)
        .required('Password is required'),
    confirmpassword: yup.string().when("password", {
        is: (val: string | any[]) => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf(
            [yup.ref("password")],
            "Password must match"
        )
    })
})


export default function Register() {
  const navigation = useNavigation<LoginProp>();
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <Formik
        initialValues={{ email: '', password: '', confirmpassword:'', }}
        validateOnMount={true}
        onSubmit={
            values => {     
                if(
                    values.password.toLowerCase() === values.confirmpassword.toLowerCase()
                ) {
                    navigation.navigate('Login');
                }
            }
        }
        validationSchema={loginValidationSchema}
    >
        {({ handleChange, handleBlur,touched,isValid,handleSubmit, errors, values }) => (

            <View style={RegisterStyles.styles.container}>
                <View style={RegisterStyles.styles.inputContainer}>
                    <Text style={RegisterStyles.styles.title}> 
                        Register
                    </Text>
                </View>
                <View>
                    {/*Login input components*/}
                    <InputComponent 
                        placeholder="Type your e-mail"
                        label={'Email'}
                        error={(errors.email && touched.email)}
                        errorMessage={errors.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email} 
                    />
                    <InputComponent 
                        label={'Password'}
                        placeholder="Type your password"
                        password
                        error={(errors.password && touched.password)}
                        errorMessage={errors.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    <InputComponent 
                        label={'Confirm Password'}
                        placeholder="Type your password"
                        password
                        error={(errors.confirmpassword && touched.confirmpassword)}
                        errorMessage={errors.confirmpassword}
                        onChangeText={handleChange('confirmpassword')}
                        onBlur={handleBlur('confirmpassword')}
                        value={values.confirmpassword}
                    />
                </View>
                <View style={RegisterStyles.styles.buttonContainer}>
                    <Button 
                        buttonStyle={RegisterStyles.styles.button}
                        title="Register"
                        titleStyle={RegisterStyles.styles.buttonTitle}
                        disabled={!isValid}
                        disabledStyle={RegisterStyles.styles.disabledStyle}
                        disabledTitleStyle={RegisterStyles.styles.disabledTitleStyle}
                        onPress={handleSubmit}
                    />
                    <Text style={RegisterStyles.styles.bottomText}>
                        A member already? {" "}
                        <Text 
                            style={RegisterStyles.styles.bottomTextBold}
                            onPress={()=>navigation.navigate('Login')}
                        >
                            Sign In
                        </Text>
                    </Text>
                </View>
            </View>
            )}
    </Formik>
  );
}