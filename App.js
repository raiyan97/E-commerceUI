import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/Screens/Home/Home'
import Route from './src/Navigations/Route'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from './src/Styles/Colors';



const App = () => {
  return (
   <GestureHandlerRootView style={{flex:1}}>
    <Route/>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})