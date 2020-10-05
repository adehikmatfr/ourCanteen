import React from 'react';
import {View, Text, Image} from 'react-native';
import Seblak from '../../assets/jpg/seblak.jpg';

import styles from './styles';

const ImageProduct = () => {
  return (
    <View style={styles.cardImg}>
      <View style={styles.cardCon}>
        <Image source={Seblak} style={styles.img} />
      </View>
      <Text style={styles.text}>Product</Text>
    </View>
  );
};

export default ImageProduct;
