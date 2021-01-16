import React, { useState } from 'react';
import { View } from 'react-native';

import FlexButtons from './components/flex-buttons/flex-buttons';
import FlatListImages from './components/flatlist-images/flatlist-images';

import { styles } from './styles/app.styles';

export default function App() {
  return (
    <View style = {styles.view}>
      <View style = {styles.container}> 
        <FlexButtons />
        <FlatListImages />
      </View>        
    </View>
    
  );
}
