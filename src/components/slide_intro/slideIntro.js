import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import PaymentImage from '../image_transfroms/payment';
import GetOrderImage from '../image_transfroms/getOrder';
import StartImage from '../image_transfroms/start';
import TakeOrderImage from '../image_transfroms/takeOrder';

import FS from '../flash_screen';

const SlideIntro = ({navigation}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const [loading, setLoading] = useState(true);

  const {width, height} = Dimensions.get('screen');

  const setSliderPage = (event) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <FS />
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <ScrollView
            style={{flex: 1}}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
              setSliderPage(event);
            }}>
            <View style={{width, height}}>
              <GetOrderImage vRatio={300} width="100%" />
              <View style={styles.wrapper}>
                <Text style={styles.header}>take your order</Text>
                <Text style={styles.paragraph}>order items in the canteen</Text>
              </View>
            </View>
            <View style={{width, height}}>
              <TakeOrderImage vRatio={300} width="100%" />
              <View style={styles.wrapper}>
                <Text style={styles.header}>take it alone or between us</Text>
                <Text style={styles.paragraph}>
                  Your order can be taken or delivered
                </Text>
              </View>
            </View>
            <View style={{width, height}}>
              <PaymentImage vRatio={300} width="100%" />
              <View style={styles.wrapper}>
                <Text style={styles.header}>pay with one tap</Text>
                <Text style={styles.paragraph}>
                  You can pay with the vouchers you have
                </Text>
              </View>
            </View>
            <View style={{width, height}}>
              <StartImage vRatio={300} width="100%" />
              <View style={styles.wrapper}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Home')}>
                  <Text>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View style={styles.paginationWrapper}>
            {Array.from(Array(4).keys()).map((key, index) => (
              <View
                style={[
                  styles.paginationDots,
                  {opacity: pageIndex === index ? 1 : 0.2},
                ]}
                key={index}
              />
            ))}
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default SlideIntro;
