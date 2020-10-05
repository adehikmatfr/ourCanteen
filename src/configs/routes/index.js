import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeStack} from './navigator';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Splash1" component={Splash} /> */}
        <Stack.Screen name="Home1" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
