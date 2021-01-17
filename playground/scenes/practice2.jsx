import React from 'react';
import { View } from 'react-native';

import FlatListImages from '../components/flatlist-images/flatlist-images';
import { styles } from '../styles/practice1.styles';

const Practice2 = () => {
   return (
      <View style = {styles.view}>
         <View style = {styles.container}> 
            <FlatListImages />
         </View>  
      </View>
   );
}

export default Practice2;     