import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Icon } from 'react-native-elements';
import { HomeProp } from '../types/Home';

export default function BackButtonHeader() {
    const navigation = useNavigation<HomeProp>();
    return (
        <Icon name='left' type='antdesign'color='white'
            style={{
                paddingLeft:20,
                paddingTop:14,
            }}
            size={35}
            tvParallaxProperties={undefined} 
            onPress={()=>{navigation.goBack()}}               
      />
    )
}
