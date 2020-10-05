import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import style from './styles';

const Cart = ({number}) => {
  return (
    <TouchableOpacity>
      <Icon
        name="add-shopping-cart"
        color="white"
        size={30}
        style={style.iconCart}
      />
      <View style={style.containerCount}>
        <Text style={style.countText}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cart;
