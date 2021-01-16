import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from '../../styles/app.styles';

const FlexButtons = () => (
         <View style = {styles.boxContainer}>
          <View style={styles.container1}>
            <Text style = {styles.text1}>View 1</Text>
            <StatusBar style="auto" /> 
          </View>

          <View style={styles.container2}>
            <Text style = {styles.text2}>View 2</Text>
            <StatusBar style="auto" /> 
          </View>

          <View style={styles.container3}>
            <Text style = {styles.text3}>View 3</Text>
            <StatusBar style="auto" /> 
          </View>
        </View>
);

export default FlexButtons;