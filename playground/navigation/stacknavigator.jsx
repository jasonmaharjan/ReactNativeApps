import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Practice1 from '../scenes/practice1';
import Practice2 from '../scenes/practice2';

export default function StackNavigator() {
   const Stack = createStackNavigator();
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