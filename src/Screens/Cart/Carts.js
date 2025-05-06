import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Imagepath from '../../Constants/Imagepath';
import { moderateScale } from '../../Styles/Scaling';

const Carts = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
        onPress={()=>navigation.goBack('Home')}>
        <Image 
        style={styles.backArrow}
        source={Imagepath.backpng} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Carts;

const styles = StyleSheet.create({
  backArrow:{
   width:moderateScale(20),
    height:moderateScale(20),
    alignSelf:"flex-start",
    paddingLeft:moderateScale(10)
  }

  
});
