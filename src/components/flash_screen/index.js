import React, {useEffect} from 'react';

import {Text, View, Animated} from 'react-native';

const FlashScreen = () => {
  const springValue = new Animated.Value(0.3);
  const spring = () => {
    springValue.setValue(0.3);
    Animated.spring(springValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    setInterval(() => spring(), 1000);
  });
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#22aaf0',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Animated.Text
            style={{
              fontSize: 50,
              transform: [{scale: springValue}],
            }}>
            <Text>
              our<Text style={{color: '#dacbb0'}}>Canteen</Text>
            </Text>
          </Animated.Text>
        </View>
      </View>
    </>
  );
};

export default FlashScreen;
