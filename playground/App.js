import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';

import { styles } from './app.styles';

export default function App() {
  return (
    <View style = {styles.view}>
      <ImageBackground source = {require('./assets/1.jpg')} style = {styles.titleContainer} >
        <Text style = {styles.title}>Flex Test</Text>
      </ImageBackground>
      <View style = {styles.container}> 

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

        <View style = {styles.imageContainer}>
          <Image source={require('./assets/1.jpg')} style = {styles.image} />
          <Image source={require('./assets/3.jpg')} style = {styles.image} />
          <Image source={require('./assets/4.jpg')} style = {styles.image} />
          <Image source={require('./assets/5.jpg')} style = {styles.image} />
        </View>

      </View>        
    </View>
    
  );
}
