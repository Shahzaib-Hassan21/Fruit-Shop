import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from '../src/screens/HomeScreen';
import OrderScreen from '../src/screens/OrderScreen';
import MyCartScreen from '../src/screens/MyCartScreen';
import MoreScreen from '../src/screens/MoreScreen';

const BottomNavigation = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab === 0 ?(
          <HomeScreen/>
        ) : selectedTab === 1 ?(
          <OrderScreen/>
        ) : selectedTab === 2 ?(
          <MyCartScreen/>
        ):(
          <MoreScreen/>
        )}
        <View style={styles.bottomContainer}>
          <TouchableOpacity 
          style={styles.bottomNav}
          onPress={() =>{
            setSelectedTab(0)
          }}>
            <Image 
            style={styles.icon}
            source={require('../images/home.png')}/>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.bottomNav}
          onPress={() =>{
            setSelectedTab(1)
          }}>
            <Image 
            style={styles.icon}
            source={require('../images/choices.png')}/>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default BottomNavigation;

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  bottomContainer:{
    flex: 1,
    backgroundColor: '#131d2e',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  bottomNav:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    width: 24,
    height: 24
  }
})