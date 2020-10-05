import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const StartImage = ({vRatio, width}) => {
  return (
    <>
      <Image
        source={require('../../assets/png/start.png')}
        style={styles.imageStyle(vRatio, width)}
      />
    </>
  );
};

export default StartImage;
