import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/practice1.styles';

const Practice4 = () => {
   return (
      <View style = {styles.view}>
            <View style = {styles.container}> 
               <Text style = {{alignSelf: 'center', color: 'grey'}}>Settings Page 2</Text>
            </View>  
      </View>
   );
}

export default Practice4;