import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { Button } from'react-native-elements';
import { Login as LoginStyles } from '../styles';
import InputComponent from '../components/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { RegisterProp } from '../types/Register';

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
})


export default function Login() {
  const navigation = useNavigation<RegisterProp>();
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <Formik
        initialValues={{ email: '', password: '' }}
        validateOnMount={true}
        onSubmit={
            values => {     
                if(values.password.toLowerCase() !== dummyLoginData.password) {
                    setVisible(true)
                } else if(values.email.toLowerCase() !== dummyLoginData.email) {
                    setEmailErrorMsg('The email entered is not registered');
                } else {
                    navigation.navigate('TabHome');
                }
            }
        }
        validationSchema={loginValidationSchema}
    >
        {({ handleChange, handleBlur,touched,isValid,handleSubmit, errors, values }) => (

            <View style={LoginStyles.styles.container}>
                <View style={LoginStyles.styles.inputContainer}>
                    <Text style={LoginStyles.styles.title}> 
                        Log in
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
                    <Text>{
                        emailErrorMsg.length > 0
                        && (errors.email && touched.email) ?
                        emailErrorMsg : '' }
                    </Text>
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
                </View>
                <View style={LoginStyles.styles.buttonContainer}>
                    <Button 
                        buttonStyle={LoginStyles.styles.button}
                        title="Sign in"
                        titleStyle={LoginStyles.styles.buttonTitle}
                        disabled={!isValid}
                        disabledStyle={LoginStyles.styles.disabledStyle}
                        disabledTitleStyle={LoginStyles.styles.disabledTitleStyle}
                        onPress={handleSubmit}
                    />
                    <Text style={LoginStyles.styles.bottomText}>
                        Not a member? {" "}
                        <Text 
                            style={LoginStyles.styles.bottomTextBold}
                            onPress={()=>navigation.navigate('Register')}
                        >
                            Join the Club
                        </Text>
                    </Text>
                </View>
                <View>
                    <Overlay 
                        isVisible={visible}
                        onBackdropPress={toggleOverlay}
                        overlayStyle={LoginStyles.styles.contentOverlay}
                        >
                        <Text style={LoginStyles.styles.titleOverlay}>
                            Incorrect{"\n"}Password
                        </Text>
                        <Text style={LoginStyles.styles.subtitleOverlay}>
                        The password you entered 
                        for{" "}
                            <Text style={LoginStyles.styles.emailOverlay}>
                                hello@gmail.com
                            </Text>
                            {" "}
                        is incorrect.
                        Please Try again.
                        </Text>
                        <Button 
                            buttonStyle={LoginStyles.styles.buttonOverlay}
                            title="Try Again"
                            titleStyle={LoginStyles.styles.buttonTitle}
                            onPress={toggleOverlay}
                        />
                    </Overlay>
                </View>
            </View>
            )}
    </Formik>
  );
}