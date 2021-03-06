import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import FlexButtons from '../components/flex-buttons/flex-buttons';

import { styles } from '../styles/practice1.styles';

const Practice1 = ({navigation}) => {
   return (
      <View style = {styles.view}>
            <View style = {styles.container}> 
               <FlexButtons />
            </View>  
            <TouchableOpacity onPress = {() => navigation.navigate('Page 2') } style = {styles.nextPage}>   
               <Text style = {{alignSelf: 'center', color: 'white'}}>Next</Text>
            </TouchableOpacity>
      </View>
   );
}

export default Practice1;