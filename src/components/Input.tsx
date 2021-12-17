import React from "react"; 
import  { Text, View } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { styles as InputStyles } from "../styles/Input";
import { InputProps } from "../types/Input";


export default function InputComponent(props: InputProps){

    const [isSecure, setIsSecure] = React.useState(true);
    const errorIcon: JSX.Element =
    <Icon
        name='warning'
        type='antdesign'
        color='red'
        tvParallaxProperties={undefined}        
    />;

    const isSecureIcon: JSX.Element =
    <Icon
        name='eye'
        type='feather'
        color='white'
        onPress={()=>setIsSecure(false)}
        tvParallaxProperties={undefined}        
    />;
    const isNotSecureIcon: JSX.Element =
    <Icon
        name='eye-off'
        type='feather'
        color='white'
        onPress={()=>setIsSecure(true)}
        tvParallaxProperties={undefined}        
    />;

    return(
        <View style={InputStyles.container}>
            {!props.password && (
                <Input
                    rightIcon={props.error ? errorIcon : <Text></Text>}
                    placeholder={props.placeholder}
                    inputContainerStyle={InputStyles.inputContainerStyle}
                    inputStyle={InputStyles.inputStyle}
                    autoCompleteType={undefined}
                    errorMessage={props.error ? props.errorMessage : ''}
                    onChangeText={props.onChangeText}
                    onBlur={props.onBlur}
                    value={props.value}
                    label={props.label}
                    labelStyle={InputStyles.labelStyle}
                />
            )}
            {props.password && (
                <Input
                    rightIcon={isSecure ? isSecureIcon : isNotSecureIcon}
                    placeholder={props.placeholder}
                    inputContainerStyle={InputStyles.inputContainerStyle}
                    inputStyle={InputStyles.inputStyle}
                    autoCompleteType={undefined}
                    secureTextEntry={isSecure}
                    errorMessage={props.error ? props.errorMessage : ''}
                    onChangeText={props.onChangeText}
                    onBlur={props.onBlur}
                    value={props.value}
                    label={props.label}
                    labelStyle={InputStyles.labelStyle}
                />
            )}
        </View>
    );
}
