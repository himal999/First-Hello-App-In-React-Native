import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
const index = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Audi A6S</Text>
        <Text style={styles.subTitle}>Brand New</Text>
      </View>
    </View>
  );
};

export default index;
