import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FA from 'react-native-vector-icons/FontAwesome';

import style from './styles';

const PaymentContainer = ({navigation}) => {
  return (
    <>
      <View style={style.containerPay}>
        <Text style={style.branch}>
          our<Text style={{color: '#dacbb0'}}>Canteen</Text>
        </Text>
        <Text style={style.saldo}>Rp.500.000</Text>
      </View>
      <View style={style.containerItem}>
        <TouchableOpacity style={style.containerIcon}>
          <Icon
            name="arrow-circle-up"
            color="white"
            size={40}
            onPress={() => navigation.navigate('ScanQr')}
          />
          <Text style={style.textIcon}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.containerIcon}>
          <Icon name="arrow-circle-down" color="white" size={40} />
          <Text style={style.textIcon}>TopUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.containerIcon}>
          <FA name="send-o" color="white" size={31} style={{marginTop: 5}} />
          <Text style={style.textIcon}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.containerIcon}>
          <FA name="clock-o" color="white" size={36} style={{marginTop: 5}} />
          <Text style={style.textIcon}>Pay Latter</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PaymentContainer;
