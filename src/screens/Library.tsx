import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { Button } from'react-native-elements';
import { Home as HomeStyles } from '../styles';

export default function Library() {

  return (
        <View style={HomeStyles.styles.container}>
            <Text style={HomeStyles.styles.title}> 
                Income
            </Text>
        </View>
        );
    }