import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types/RootStackParams';
import { TabStackParamList } from '../types/TabStackParamList';
import Welcome from '../screens/Welcome';
import LoginSignUp from '../screens/LoginSignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Library from '../screens/Library';
import Adventures from '../screens/Adventures';
import Income from '../screens/Income';
import BackButtonHeader from '../components/BackButtonHeader';
import Register from '../screens/Register';
import LogoutButton from '../components/LogoutButton';

const Stack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<TabStackParamList>();

export function TabNavigator(){
  return(
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Income" component={Income} />
        <BottomTab.Screen name="Adventures" component={Adventures} />
        <BottomTab.Screen name="Library" component={Library} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default function AppNavigator() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
        >
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#000D16',
                shadowOpacity: 0,
              },
              headerRight: () => (
                <LogoutButton />
              ),
              headerTitleStyle: {
                display:'none'
              }
            }}
          />
          <Stack.Screen name="Welcome"
            options={{
              headerShown: false,
            }}
            component={Welcome} 
          />
          <Stack.Screen 
            name="LoginSignUp"
            component={LoginSignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Login" component={Login}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#000D16',
                shadowOpacity: 0,
              },
              headerLeft: () => (
                <BackButtonHeader />
              ),
              headerTitleStyle: {
                display:'none'
              }
            }}
          />
          <Stack.Screen name="Register" component={Register}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#000D16',
                shadowOpacity: 0,
              },
              headerLeft: () => (
                <BackButtonHeader />
              ),
              headerTitleStyle: {
                display:'none'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}