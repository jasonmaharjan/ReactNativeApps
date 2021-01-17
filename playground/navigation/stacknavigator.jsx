import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Practice1 from '../scenes/practice1';
import Practice2 from '../scenes/practice2';
import Practice3 from '../scenes/practice3';
import Practice4 from '../scenes/practice4';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions = {{
            headerSyle: {
               backgroundColor: 'grey',
            },
            headerTintColor: 'grey',
            headerTitleStyle: {
               fontWeight: 'bold',
            },
         }}
      > 
         <Stack.Screen
            name = "Page 1"
            component = {Practice1}
            options = {{ 
               title: 'Practice 1'
            }}
         />
         <Stack.Screen
            name = "Page 2"
            component = {Practice2}
            options = {{ title: 'Practice 2'}}
         />
    </Stack.Navigator>
   );
}

export const SettingsStackNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions = {{
            headerSyle: {
               backgroundColor: 'grey',
            },
            headerTintColor: 'grey',
            headerTitleStyle: {
               fontWeight: 'bold',
            },
         }}
      > 
         <Stack.Screen
            name = "Page 3"
            component = {Practice3}
            options = {{ 
               title: 'Practice 3'
            }}
         />
         <Stack.Screen
            name = "Page 4"
            component = {Practice4}
            options = {{ title: 'Practice 4'}}
         />
    </Stack.Navigator>
   );
}