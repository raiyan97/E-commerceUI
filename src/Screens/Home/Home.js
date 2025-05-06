import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  onChangeNumber,
  value,
  Platform,
  ScrollView,
  Dimensions,
  Animated,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  height,
  moderateScale,
  scale,
  verticalScale,
} from '../../Styles/Scaling';
import Imagepath from '../../Constants/Imagepath';
import Togglebutton from '../../Components/ToggleButton';
import Colors from '../../Styles/Colors';
import Categories from '../Categories/Categories';
import CategoriesComponent from '../../Components/CategoriesComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles, {Style} from '../Home/Style';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import Suggest from '../../Components/Suggest';

const statuses = [
  {
    id: '1',
    label: 'Flipkart',
    Imagepath: require('../../assets/images/logo.png'),
    bgColor: 'lightgrey',
    textColor: '#0e0f0f',
  },
  {
    id: '2',
    label: 'Grocery', // how to write fullname this item
    Imagepath: require('../../assets/images/vegetable.png'),
    bgColor: 'lightgrey',
    textColor: '#0e0f0f',
  },
  {
    id: '3',
    label: 'Travel',
    Imagepath: require('../../assets/images/flight.png'),
    bgColor: 'lightgrey',
    textColor: '#0e0f0f',
  },
  {
    id: '4',
    label: 'Pay',
    Imagepath: require('../../assets/images/pay.png'),
    bgColor: 'lightgrey',
    textColor: '#0e0f0f',
  },
];

const stack =  createNativeStackNavigator();

const Home = ({navigation}) => {
  const data = [
    {id: 1, Image: Imagepath.M2},
    {id: 2, Image: Imagepath.screenmagnifier},
    {id: 3, Image: Imagepath.iphone},
    {id: 4, Image: Imagepath.homedecor},
    {id: 5, Image: Imagepath.mac},
  ];

  const itemData = [
    {id: 1, Image: Imagepath.M2},
    {id: 2, Image: Imagepath.screenmagnifier},
    {id: 3, Image: Imagepath.iphone},
  ];
  const width = Dimensions.get('window').width;
  const ref = React.useRef(null);
  const progress = useSharedValue(0);
  const [selectedId, setSelectedId] = useState('1');
  const [availableId, setAvailableId] = useState('');
  const [isToooo, setisToooo] = useState(false);

  const onPressPagination = index => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  const handleToggle = value => {
    console.log('Switch is now:', value); // true or false
  };
  const toggleSwitch = () => {
    setisToooo(previousState => !previousState);
  };

  const listItem = ({item}) => {
    const isAvailabel = item.id === selectedId;
    return (
      <TouchableOpacity
        onPress={() => setAvailableId(item.id)}
        style={[
          styles.list,
          // {backgroundColor: isAvailabel ? 'yellow' : item.bgColor},
        ]}>
        <View
          style={{
            backgroundColor: "lightgrey",
            paddingHorizontal:moderateScale(5),
            alignSelf:"center",
           
          }}>
          <Image
            style={{width: 100, height: 100, justifyContent: 'space-between',alignSelf:"center"}}
            source={item.Image}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[
          styles.item,
          {backgroundColor: isSelected ? 'yellow' : item.bgColor},
        ]}>
        <Image
          style={styles.image}
          source={item.Imagepath}
          resizeMode="contain"
        />

        <Text
          numberOfLines={1}
          style={[
            styles.label,
            {color: isSelected ? item.textColor : item.textColor},
          ]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <ScrollView>
        <View
          style={{
            marginTop: moderateScale(10),
            // paddingHorizontal: moderateScale(10),
          }}>
          <FlatList
            data={statuses}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
          <View
            style={{
              paddingHorizontal: moderateScale(10),
            }}>
            <TouchableOpacity>
              <View
                style={{
                  justifyContent: 'flex-start',
                  paddingHorizontal: moderateScale(15),
                  paddingTop: moderateScale(10),
                  flexDirection: 'row',
                }}>
                <Image
                  style={{
                    width: moderateScale(15),
                    height: moderateScale(15),
                    flexDirection: 'row',
                  }}
                  source={Imagepath.home}
                />
                <Text
                  style={{
                    fontSize: scale(14),
                    fontWeight: '500',
                    flexDirection: 'row',
                  }}>
                  {''} HOME{' '}
                </Text>
                <Text>{''} Iftikarabad road, Chaman ganj kanpur, Kanp..</Text>
                <Image style={styles.arrowIcon} source={Imagepath.rightarrowios} />
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: moderateScale(20),
                // borderWidth:0.5
                //    backgroundColor:Colors.black
              }}>
              <View
                style={{
                  padding: moderateScale(10),
                  borderRadius: moderateScale(10),
                  marginRight: moderateScale(10),
                }}>
                <Togglebutton
                  toogleValue={isToooo}
                  toggleSwitch={() => toggleSwitch()}
                  tooglePosition={handleToggle(!isToooo)}
                  label={'Brand Mall'}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 0.5,
                  borderRadius: moderateScale(10),
                  flex: 1,
                  paddingHorizontal: moderateScale(10),
                  paddingVertical:
                    Platform.OS === 'ios' ? moderateScale(8) : moderateScale(0),
                }}>
                <Image source={Imagepath.SearchBar} style={styles.searchIcon} />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={value}
                  placeholder="Shoes"
                  keyboardType="default"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.golden,
                paddingVertical: moderateScale(5),
              }}>
              <Image source={Imagepath.star} />
              <Text> 7 DAYS RETURN</Text>
              <Image source={Imagepath.star} />
              <Text> 7 DAYS RETURN</Text>
              <Image source={Imagepath.star} />
              <Text> 7 DAYS RETURN</Text>
            </View>
            <Carousel
              autoPlay={true}
              autoPlayInterval={2000}
              mode="parallax"
              //  modeConfig={{snapDirection:"left"}}
              ref={ref}
              width={width / 1}
              height={height / 5}
              data={data}
              onProgressChange={progress}
              renderItem={({index, item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Carts')}
                  style={{
                    // borderWidth: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: moderateScale(10),
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'stretch',
                      borderRadius: 20,
                      paddingRight: moderateScale(20),
                    }}
                    source={item.Image}
                  />
                </TouchableOpacity>
              )}
            />

            <Pagination.Custom
              progress={progress}
              data={data}
              dotStyle={{
                backgroundColor: 'rgba(230, 225, 225, 0.2)',
                borderRadius: 50,
                // shadowOpacity:Animated,
                width: 20,
                marginTop: moderateScale(10),
              }}
              //   containerStyle={{paddingHorizontal:moderateScale(40) }}
              onPress={onPressPagination}
            />
            <CategoriesComponent />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: moderateScale(20),
                paddingTop: moderateScale(15),
              }}>
              <Text style={styles.suggestText}>Suggested for You</Text>
              <View
                style={{
                  width: 40,
                  height: 23,
                  flexDirection: 'row',
                  backgroundColor: Colors.blue,
                  alignSelf: 'center',
                  borderRadius: 50,
                }}>
                <TouchableOpacity onPress={() => Alert.alert('good choice')}>
                  <Image
                    style={styles.rightArrow}
                    source={Imagepath.rightarrow}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <FlatList
            data={itemData}
            renderItem={listItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

