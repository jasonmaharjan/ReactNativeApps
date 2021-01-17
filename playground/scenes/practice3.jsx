import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import { styles } from '../styles/practice1.styles';

const Practice3 = ({navigation}) => {
   return (
      <View style = {styles.view}>
            <View style = {styles.container}> 
               <Text style = {{alignSelf: 'center', color: 'grey'}}>Settings Page 1</Text>
            </View>  
            <TouchableOpacity onPress = {() => navigation.navigate('Page 4') } style = {styles.nextPage}>   
               <Text style = {{alignSelf: 'center', color: 'white'}}>Next</Text>
            </TouchableOpacity>
      </View>
   );
}

export default Practice3;