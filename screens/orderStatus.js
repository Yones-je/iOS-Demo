import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function OrderStatus({route, navigation}) {
  const {status} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/banner2.jpg')}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.tackText}>Tack för din beställning!</Text>
        <Text style={styles.orderText}>Order#: 1001</Text>
        <Text style={styles.statusText}>Status:{status}</Text>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
  },
  orderText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    marginVertical: 2,
    alignSelf: 'baseline',
    paddingHorizontal: 10,
  },
  statusText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    alignSelf: 'baseline',
    paddingHorizontal: 10,
    marginTop: 2,
    marginBottom: 15,
  },
  tackText: {
    fontFamily: 'iciel Cadena',
    fontSize: 32,
    //padding: 10,
    //marginVertical: 10,
  },
  imgContainer: {
    width: '100%',
    marginTop: 25,
    //height: '80%',
  },
  img: {
    width: '100%',
    height: '55%',
  },
  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#eee',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    bottom: 140,
    borderColor: '#888',
    borderWidth: 1,
    //width: '100%',
  },
});
