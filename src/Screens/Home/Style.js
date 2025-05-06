import { StyleSheet } from "react-native";
import { moderateScale, scale } from "../../Styles/Scaling";
import Colors from "../../Styles/Colors";
import fontsFamily from "../../Constants/fontsFamily";

 const styles = StyleSheet.create({
    item: {
      width: moderateScale(84),
      height: moderateScale(70),
      paddingVertical: moderateScale(4),
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'flex-start',
      borderRadius: 17,
      marginRight: moderateScale(10),
    },
  
    label: {
      fontSize: scale(14),
      fontFamily:fontsFamily.regular,
      fontWeight: '500',
      textAlign: 'center',
      top: moderateScale(7),
    },
    listContainer: {
      marginTop: moderateScale(10),
      paddingHorizontal: moderateScale(24),
    },
    image: {
      width: moderateScale(30),
      height: moderateScale(30),
      marginTop: moderateScale(5),
    },
    arrowIcon: {
      width: moderateScale(10),
      height: moderateScale(10),
      flexDirection: 'row',
      top: moderateScale(4),
    },
    searchIcon: {
      width: moderateScale(24),
      height: moderateScale(24),
    },
    input: {
      fontSize: scale(18),
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      left: moderateScale(10),
    },
    cardText: {
      fontSize: scale(14),
      // FontsFamily: FontsFamily.semiBold,
      alignSelf: 'flex-start',
      color: Colors.golden,
    },
    suggestText: {
      fontSize: scale(19),
      fontWeight: 'bold',
    },
    rightArrow: {
      width: moderateScale(18),
      height: moderateScale(18),
      justifyContent: 'flex-end',
      tintColor: Colors.white,
      left: 10,
      top: 2,
    },
    container2: {
      marginTop: moderateScale(10),
      paddingHorizontal: moderateScale(24),
    },
    list: {
      paddingVertical: moderateScale(4),
      alignContent: 'space-between',
      alignSelf:"center",
      marginRight: moderateScale(10),
    },
    img: {
      width: moderateScale(30),
      height: moderateScale(30),
      marginTop: moderateScale(5),
    },
  });
  

  export default styles;