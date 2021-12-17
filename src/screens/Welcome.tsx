import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { Button } from'react-native-elements';
import { LoginSignUpProp } from '../types/LoginSignUp';
import { Welcome as WelcomeStyles } from '../styles';
import Background from '../components/Background';

export default function Welcome() {
  const navigation = useNavigation<LoginSignUpProp>();
  return (
    <Background>
    <View style={WelcomeStyles.styles.container}>
      <Text style={WelcomeStyles.styles.title}> Welcome</Text>
      <Text style={WelcomeStyles.styles.text}>
        Obtain unfiltered insight on how
        others like you excel at life and
        business on a daily basis.
      </Text>
      <Button 
        buttonStyle={WelcomeStyles.styles.button}
        title="Get Started"
        titleStyle={WelcomeStyles.styles.buttonTitle}
        onPress={() => navigation.navigate('LoginSignUp')}
      />
    </View>
    </Background>
  );
}