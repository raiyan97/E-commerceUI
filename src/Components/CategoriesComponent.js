import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import Imagepath from '../Constants/Imagepath';
import {moderateScale, scale} from '../Styles/Scaling';
import Colors from '../Styles/Colors';

const DATA = [
  {
    id: '1',
    title: 'Fashion',
    Imagepath: require("../assets/images/fashiongirl.jpeg"),
  },
  {
    id: '2',
    title: 'Gadgets',
    Imagepath: require('../assets/images/airwatches.jpeg'),
  },
  {
    id: '3',
    title: 'Beauty',
    Imagepath: require('../assets/images/shampoos.jpg'),
  },
  {
    id: '4',
    title: 'Toys, Babies',
    Imagepath: require('../assets/images/pamper.webp'),
  },
  {
    id: '5',
    title: 'Home',
    Imagepath: require('../assets/images/homedecor.jpeg'),
  },
  {
    id: '6',
    title: 'Accesaries',
    Imagepath: require('../assets/images/laptop.webp'),
  },
];

const CategoryItem = ({item}) => (

 <View style={styles.item}>
    <Image source={item.Imagepath} style={styles.icon} />
    <Text style={styles.label}>{item.title}</Text>
  </View>
 
);

const HorizontalCategoryList = () => {
  return (
    <FlatList
      data={DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => <CategoryItem item={item} />}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(10),

    // backgroundColor:'red',
  },
  item: {
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
  },
  icon: {
    width: moderateScale(50),
    height: moderateScale(50),
    resizeMode: 'contain',
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
  label: {
    marginTop: moderateScale(5),
    fontSize: scale(11),
    textAlign: 'center',
  },
});

export default HorizontalCategoryList;
