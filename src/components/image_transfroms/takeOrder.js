import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const TakeOrderImage = ({vRatio, width}) => {
  return (
    <>
      <Image
        source={require('../../assets/png/order.png')}
        style={styles.imageStyle(vRatio, width)}
      />
    </>
  );
};

export default TakeOrderImage;
