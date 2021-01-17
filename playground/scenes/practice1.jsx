import React from 'react';
import { View, Button } from 'react-native';

import FlexButtons from '../components/flex-buttons/flex-buttons';
import FlatListImages from '../components/flatlist-images/flatlist-images';

import { styles } from '../styles/practice1.styles';

const Practice1 = ({navigation}) => {
   return (
      <View style = {styles.view}>
            <View style = {styles.container}> 
               <FlexButtons />
               <FlatListImages />
            </View>        
            <Button title = "Next Page" onPress = { () => navigation.navigate('Page 2') } />
      </View>
   );
}

export default Practice1;