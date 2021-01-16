import React, { useState } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/app.styles';

const FlatListImages = () => {
   const [images, setImages] = useState(
      [
        require('../../assets/1.jpg'),
        require('../../assets/3.jpg'),
        require('../../assets/4.jpg'),
        require('../../assets/5.jpg')
      ]
    );
    return (
      <View style = {styles.imageContainer}>
         <FlatList
         data = {images}
         renderItem = { ({item, index}) => (
            <View style = {{flexDirection: 'row'}}>
               <Image source = {item} key = {index} style = {styles.image} />
               <TouchableOpacity onPress = {() => alert("Albedo says Hi") } style = {{elevation: 5, borderRadius: 10, backgroundColor: 'lightpink', height: 40, width: 100, padding: 10, margin: 50}}>
               <Text style = {{alignSelf: 'center', color: 'grey'}}>Click Me</Text>
               </TouchableOpacity>
            </View>
         )}
         keyExtractor = {(index) => index.toString()}
         />
      </View>
    );
};

export default FlatListImages;