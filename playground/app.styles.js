import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view: {
     flex: 1
   },

   titleContainer: {
      marginTop: 80,
      marginLeft: 10,
      marginRight: 10, 
      height: 50,
      borderRadius: 50,
   },
 
   title: {
     marginTop: 10,
     fontSize: 20,
     color: 'white',
     textAlign: 'center',
   },  
 
   container: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
     margin: 15,
     maxHeight: 600,
   },

   boxContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 10,
      maxHeight: 120,
      backgroundColor: '#dcdcdc',
      borderRadius: 30,
    },
 
   container1: {
     height: 80,
     width: 80,
     borderRadius: 10,
     backgroundColor: "red",
     alignItems: 'center',
     justifyContent: 'center',
   },
 
   text1: {
     color: 'white',
   },
 
   container2: {
     backgroundColor: "orange",
     height: 80,
     width: 80,
     borderRadius: 10,
     alignItems: 'center',
     justifyContent: 'center',
   },
     
   text2: {
     color: 'white',
   },
 
   container3: {
     backgroundColor: "green",
     height: 80,
     width: 80,
     borderRadius: 10,
     alignItems: 'center',
     justifyContent: 'center',
   },
 
   text3: {
     color: 'white',
   },

   imageContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexGrow: 1,
      margin: 10,
      marginBottom: 60,
      backgroundColor: '#deb887',
      borderRadius: 30,
      flexWrap: 'wrap',
   },

   image: {
      marginTop: 10,
      marginLeft: 10, 
      marginRight: 10,
      height: 150,
      width: 150,
      //elevation: 10,
      borderRadius: 10,
   }
 });
 