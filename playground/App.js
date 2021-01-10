import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>

      <Text style = {styles.title}>Flex Test</Text>

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    marginHorizontal: 30,
    marginBottom: 20,
  },

  title: {
    height: 40,
    textAlign: 'center'
  },  

  container1: {
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    color: 'white',
  },

  container2: {
    backgroundColor: "orange",
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
    
  text2: {
    color: 'white',
  },

  container3: {
    flex: 3,
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text3: {
    color: 'white',
  }
});
