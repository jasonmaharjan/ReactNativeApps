import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import { HomeStackNavigator, SettingsStackNavigator} from '../navigation/stacknavigator';

export default function StackNavigator() {
   const Tab = createBottomTabNavigator();
   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
               iconName = 'home';
            } else if (route.name === 'Settings') {
               iconName = 'list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
         })}
         tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'lightgray',
         }}
      > 
         <Tab.Screen
            name = "Home"
            component = {HomeStackNavigator}
            options = {{ 
               title: 'Home'
            }}
         />
         <Tab.Screen
            name = "Settings"
            component = {SettingsStackNavigator}
            options = {{ title: 'Settings', tabBarBadge: 3}}
         />
    </Tab.Navigator>
   );
}