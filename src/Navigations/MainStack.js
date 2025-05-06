import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyBottomTab from './MyBottomTab';
import { Carts } from '../Screens';


const Stack  = createNativeStackNavigator();
const MainStack = () => {
  return (
 <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='MyBottomTab' component={MyBottomTab} />
    <Stack.Screen name='Carts' component={Carts} />
 </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})