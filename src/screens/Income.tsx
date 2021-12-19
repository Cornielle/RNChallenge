import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { Home as HomeStyles } from '../styles';

export default function Income() {

  return (
    <View style={HomeStyles.styles.container}>
        <Text style={HomeStyles.styles.title}> 
            Income
        </Text>
    </View>
    );
}