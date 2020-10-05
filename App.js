/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Router from './src/configs/routes/index';
// import SlideIntro from './src/components/slide_intro/slideIntro';
// import Home from './src/containers/pages/home';
// import FS from './src/components/flash_screen';

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};
export default App;
