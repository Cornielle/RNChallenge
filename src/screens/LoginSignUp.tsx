import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { Button } from'react-native-elements';
import { LoginProp } from '../types/Login';
import { LoginSignUp as LoginSignUpStyles } from '../styles';
import Background from '../components/Background';

export default function LoginSignUp() {
  const navigation = useNavigation<LoginProp>();
  return (
    <Background>
    <View style={LoginSignUpStyles.styles.container}>
      <Text style={LoginSignUpStyles.styles.title}> 
        Gain access to a Large,
        highly influential network of
        entrepeneurs
      </Text>
      <Button 
        buttonStyle={LoginSignUpStyles.styles.button}
        title="Apply Now!"
        titleStyle={LoginSignUpStyles.styles.buttonTitle}
        onPress={() => navigation.navigate('Register')}
      />
      <Button 
        buttonStyle={LoginSignUpStyles.styles.buttonOutline}
        title="Log in"
        titleStyle={LoginSignUpStyles.styles.buttonTitleOutline}
        type='outline'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
    </Background>
  );
}