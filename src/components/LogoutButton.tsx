import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native-elements';
import { LoginProp } from '../types/Login';

export default function BackButtonHeader() {
    const navigation = useNavigation<LoginProp>();
    return (
        <Text onPress={()=>{navigation.goBack()}}>
            Log out
        </Text>
    )
}
