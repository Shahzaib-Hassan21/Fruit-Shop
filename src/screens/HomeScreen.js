import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TextInput from '../../components/TextInput';

const HomeScreen = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>back!</Text>
      <Text style={styles. mainText}>Sign in to access your package history and get real-time updates on all your shipments</Text>
      <TextInput
          placeholder={'Enter Email'}
          icon={require('../../images/mail.png')}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
        />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text1:{
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    top: 10,
    marginLeft: 13
  },
  text2:{
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    top: 5,
    marginLeft: 13
  },
  mainText:{
    margin: 13,
    fontSize: 17,
  }
})