import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native-elements';
import { LoginProp } from '../types/Login';
import { Home as HomeStyles } from '../styles';

export default function BackButtonHeader() {
    const navigation = useNavigation<LoginProp>();
    return (
        <Text 
            onPress={()=>{navigation.navigate('Login')}} 
            style={HomeStyles.styles.titleLogout}
        >
            Log out
        </Text>
    )
}
