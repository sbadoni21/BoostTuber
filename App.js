import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';



//images and other resources

import logo from './src/assests/images/logo.png'





export default function App() {
  return (
    <>
      <SafeAreaView>
      <View >
   
      <View style={styles.container}>
      <Icon name="bell" size={30} />
        <Image source={logo} style={styles.logo}  />
        
      </View>
        </View>
        
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container:{
 flex: 1,
    backgroundColor: "transparent", 
    alignItems: 'stretch',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row', 
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
})