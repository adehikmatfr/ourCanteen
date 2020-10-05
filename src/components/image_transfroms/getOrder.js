import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const GetOrderImage = ({vRatio, width}) => {
  return (
    <>
      <Image
        source={require('../../assets/png/getOrder.png')}
        style={styles.imageStyle(vRatio, width)}
      />
    </>
  );
};

export default GetOrderImage;
