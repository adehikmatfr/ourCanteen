import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ImagePro from './imageProduct';

import styles from './styles';

const scrollHorizontal = () => {
  return (
    <View>
      <View style={styles.scrollCon}>
        <Text style={styles.Bedge}>populer product</Text>
        <Text style={styles.showAll}>see all</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row', paddingLeft: 16}}>
        <ImagePro />
        <ImagePro />
        <ImagePro />
        <ImagePro />
        <ImagePro />
      </ScrollView>
      <View style={styles.garis}></View>
    </View>
  );
};

export default scrollHorizontal;
