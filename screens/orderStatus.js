import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function OrderStatus() {
  return (
    <View style={styles.container}>
      <Text style={styles.tackText}>Tack för din beställning!</Text>
      <Text style={styles.orderText}>Order#:</Text>
      <Text style={styles.statusText}>Status:</Text>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/banner2.jpg')}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    //margin: 30,
  },
  orderText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    marginVertical: 2,
  },
  statusText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
  },
  tackText: {
    fontFamily: 'iciel Cadena',
    fontSize: 32,
    marginVertical: 30,
  },
  imgContainer: {
    width: '100%',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '50%',

  }
});
