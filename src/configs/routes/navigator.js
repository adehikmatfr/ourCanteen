import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../containers/pages/home';
import ScanQr from '../../containers/pages/scanQrCode';
import SlideIntro from '../../components/slide_intro/slideIntro';

const HomeN = createStackNavigator();
const Splas = createStackNavigator();

// export const Splash = () => {
//   return (
//     <Splas.Navigator screenOptions={{headerShown: false}}>
//       <Splas.Screen name="SlideIntro" component={SlideIntro} />
//     </Splas.Navigator>
//   );
// };

export const HomeStack = () => {
  return (
    <HomeN.Navigator
      // initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeN.Screen name="SlideIntro" component={SlideIntro} />
      <HomeN.Screen name="Home" component={Home} />
      <HomeN.Screen name="ScanQr" component={ScanQr} />
    </HomeN.Navigator>
  );
};
