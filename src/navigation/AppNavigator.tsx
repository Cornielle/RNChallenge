import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types/Navigator/RootStackParams';
import { TabStackParamList } from '../types/Navigator/TabStackParamList';
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
import { Image } from 'react-native-elements';

const Stack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<TabStackParamList>();

/* Custom Icons*/

const homeImg =  "../assets/images/home.png";
const adventuresImg =  "../assets/images/adventures.png";
const libraryImg =  "../assets/images/library.png";
const incomeImg =  "../assets/images/income.png";

export function TabNavigator(){
  return(
    <BottomTab.Navigator>
      <BottomTab.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: true,
          headerLeftLabelVisible:false,
          headerStyle: {
            backgroundColor: '#000D16',
            shadowOpacity: 0,
          },
          headerRight: () => (
            <LogoutButton />
          ),
          headerTitleStyle: {
            display:'none'
          },
          tabBarStyle: {
            backgroundColor: '#000D16',
            shadowOpacity: 0,
            borderTopColor: '#000D16',
          },
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 23, height: 20 }}
                source={require(`${homeImg}`)}
              />
            );
          }
        }
      }
      />
      <BottomTab.Screen 
        name="Income" 
        component={Income} 
        options={{
          headerShown: true,
          headerLeftLabelVisible:false,
          headerStyle: {
            backgroundColor: '#000D16',
            shadowOpacity: 0,
          },
          headerRight: () => (
            <LogoutButton />
          ),
          headerTitleStyle: {
            display:'none'
          },
          tabBarStyle: {
            backgroundColor: '#000D16',
            shadowOpacity: 0,
            borderTopColor: '#000D16',
          },
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 23, height: 20 }}
                source={require(`${incomeImg}`)}
              />
            );
          }
        }}
      />
      <BottomTab.Screen 
        name="Adventures"
        component={Adventures}
        options={{
          headerShown: true,
          headerLeftLabelVisible:false,
          headerStyle: {
            backgroundColor: '#000D16',
            shadowOpacity: 0,
          },
          headerRight: () => (
            <LogoutButton />
          ),
          headerTitleStyle: {
            display:'none'
          },
          tabBarStyle: {
            backgroundColor: '#000D16',
            shadowOpacity: 0,
            borderTopColor: '#000D16',
          },
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 23, height: 20 }}
                source={require(`${adventuresImg}`)}
              />
            );
          }
        }}
       />
      <BottomTab.Screen 
        name="Library" 
        component={Library} 
        options={{
          headerShown: true,
          headerLeftLabelVisible:false,
          headerStyle: {
            backgroundColor: '#000D16',
            shadowOpacity: 0,
          },
          headerRight: () => (
            <LogoutButton />
          ),
          headerTitleStyle: {
            display:'none'
          },
          tabBarStyle: {
            backgroundColor: '#000D16',
            shadowOpacity: 0,
            borderTopColor: '#000D16',
          },
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 23, height: 20 }}
                source={require(`${libraryImg}`)}
              />
            );
          }
        }}
      />
    </BottomTab.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Welcome"
            options={{
              headerShown: false,
            }}
            component={Welcome} 
          />
          <Stack.Screen 
            name="TabHome" 
            component={TabNavigator} 
            options={{
              headerShown: false,
              headerLeftLabelVisible:false,
              headerStyle: {
                backgroundColor: '#000D16',
                shadowOpacity: 0,
              },
              headerRight: () => (
                <LogoutButton />
              ),
              headerLeftContainerStyle:{
                display:'none'
              },
              headerTitleStyle: {
                display:'none'
              }
            }}
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