import {StyleSheet, Text, View, Switch, Image} from 'react-native';
import React, {useState} from 'react';
import { moderateScale, scale } from '../Styles/Scaling';
import Colors from '../Styles/Colors';


const Togglebutton = ({
  label,
  mainStyle,
  toggle,
  toogleValue,
  toggleSwitch,
}) => {
  return (
    <View>
      <View style={{justifyContent: 'space-between',paddingHorizontal:moderateScale(10)}}>
        <Text style={styles.textContent4}>{label}</Text>
        <Switch
          trackColor={{false: '#767577', true: "#703973"}}
          thumbColor={toogleValue ? "#f4f3f4" : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={toogleValue}
          style={styles.toggleIcon}
        />
      </View>
    </View>
  );
};

export default Togglebutton;

const styles = StyleSheet.create({
  toggleIcon: {
    // backgroundColor:Colors.black
    // alignSelf: 'flex-start',
    // paddingVertical: moderateScale(35),
    
  },
  textContent4: {
    fontSize: scale(12),
    fontWeight:'400',
    bottom:moderateScale(4)
    
  },
});


  

