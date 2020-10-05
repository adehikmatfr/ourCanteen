import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const PaymentImage = ({vRatio, width}) => {
  return (
    <>
      <Image
        source={require('../../assets/png/payment.png')}
        style={styles.imageStyle(vRatio, width)}
      />
    </>
  );
};

export default PaymentImage;
