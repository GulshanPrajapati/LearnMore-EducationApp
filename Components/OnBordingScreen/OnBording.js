import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  useState,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const OnBording = () => {
  return (
    <SafeAreaView>
      <Image
        source={require('../../img/Enjoy.png')}
        style={{width: 491, resizeMode: 'contain'}}
        />
    </SafeAreaView>
  );
};


export default OnBording;
