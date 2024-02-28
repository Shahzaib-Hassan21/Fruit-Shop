import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => { 
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Swiper 
      dot={<View style={styles.paginationDot} />}
        activeDot={<View style={styles.activePaginationDot} />}> 
      <Image
        style={styles.welcomeImg}
        source={require('../../images/berries.jpg')}
      />
       <Image
        style={styles.welcomeImg}
        source={require('../../images/Oranges.jpg')}
      />
       <Image
        style={styles.welcomeImg}
        source={require('../../images/apples.jpg')}
      />
      </Swiper>
      <View style={styles.contentContainer}>
      <Text style={styles.firstText}>Welcome to Fruit Shop</Text>
      <Text style={styles.secondText}>
        Embark on a culinary journey with fresh fruits brought right to your
        kitchen
      </Text>
      <TouchableOpacity 
      onPress={()=> {
        navigation.navigate('HomeScreen')
      }}
      style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#131d2e',
  },
  contentContainer:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: hp('25%')
  },
  welcomeImg: {
    height: hp('50%'),
    width: wp('100%'),
    resizeMode: 'cover',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  firstText: {
    color: 'white',
    textAlign: 'center',
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
  },
  secondText: {
    color: 'white',
    textAlign: 'center',
    fontSize: hp('2.3%'),
    top: hp('2%'),
    width: wp('80%'),
  },
  btn: {
    borderWidth: 1,
    width: wp('90%'),
    top: hp('8%'),
    backgroundColor: 'white',
    borderRadius: 30,
    alignSelf: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#131d2e',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    paddingVertical: hp('2.3%'),
  },
  paginationDot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    marginBottom: hp('40%'),
  },
  activePaginationDot: {
    backgroundColor: '#fff',
    width: wp('7%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    marginBottom: hp('40%'),
  },
});
