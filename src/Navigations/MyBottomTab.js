import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Account, Carts, Categories, Home, MyCart, PlayVideos} from '../Screens';
import Imagepath from '../Constants/Imagepath';
import {moderateScale} from '../Styles/Scaling';
import {Background} from '@react-navigation/elements';
import Colors from '../Styles/Colors';

const Tab = createBottomTabNavigator();
const MyBottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={() => ({
          textBarLabel: ({focused}) => {
            return (
              <View>
                <Text style={{color: focused ? Colors.gradient : Colors.black}}>
                  {' '}
                  // this color not showing Home
                </Text>
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                tintColor={focused ? Colors.red : Colors.black}
                style={{width: moderateScale(20), height: moderateScale(20)}}
                source={Imagepath.home}
              />
            );
          },
        })}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={() => ({
          textBarLabel: ({focused}) => {
            return (
              <View>
                <Text style={{color: focused ? Colors.gradient : Colors.black}}>
                  {' '}
                  // this color not showing Home
                </Text>
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                tintColor={focused ? Colors.red : Colors.black}
                style={{width: moderateScale(20), height: moderateScale(20)}}
                source={Imagepath.play}
              />
            );
          },
        })}
        name="Play"
        component={PlayVideos}
      />
      <Tab.Screen
        options={() => ({
          textBarLabel: ({focused}) => {
            return (
              <View>
                <Text style={{color: focused ? Colors.gradient : Colors.black}}>
                  {' '}
                  // this color not showing Home
                </Text>
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                tintColor={focused ? Colors.red : Colors.black}
                style={{width: moderateScale(20), height: moderateScale(20)}}
                source={Imagepath.category}
              />
            );
          },
        })}
        name="Categories"
        component={Categories}
      />
      <Tab.Screen
        options={() => ({
          textBarLabel: ({focused}) => {
            return (
              <View>
                <Text style={{color: focused ? Colors.gradient : Colors.black}}>
                  {' '}
                  // this color not showing Home
                </Text>
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                tintColor={focused ? Colors.red : Colors.black}
                style={{width: moderateScale(20), height: moderateScale(20)}}
                source={Imagepath.user}
              />
            );
          },
        })}
        name="Account"
        component={Account}
      />
      <Tab.Screen
        options={() => ({
          textBarLabel: ({focused}) => {
            return (
              <View>
                <Text style={{color: focused ? Colors.gradient : Colors.black}}>
                  {' '}
                  // this color not showing Home
                </Text>
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                tintColor={focused ? Colors.red : Colors.black}
                style={{width: moderateScale(20), height: moderateScale(20)}}
                source={Imagepath.shoping}
              />
            );
          },
        })}
        name="Cart"
        component={Carts}
      />
    </Tab.Navigator>
  );
};

export default MyBottomTab;

const styles = StyleSheet.create({});
