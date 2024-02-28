import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../src/screens/WelcomeScreen'
import HomeScreen from '../src/screens/HomeScreen'
import OrderScreen from '../src/screens/OrderScreen'
import MyCartScreen from '../src/screens/MyCartScreen'
import MoreScreen from '../src/screens/MoreScreen'
import BottomNavigation from '../bottom/BottomNavigation'

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        {/* <Stack.Screen name='BottomNavigation' component={BottomNavigation}/> */}
        <Stack.Screen name= 'HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='OrderScreen' component={OrderScreen}/>
        <Stack.Screen name='MyCartScreen' component={MyCartScreen}/>
        <Stack.Screen name='MoreScreen' component={MoreScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default RootNavigation;