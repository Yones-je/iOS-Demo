import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Om Oss</Text>
      <View style={styles.card}>
        <Text>Kontaktinformation: ipsem lorum</Text>
        <Text>Lorum ipsem tripsem mipsem</Text>
      </View>
      <View style={styles.imgContainer}>
        <Text style={styles.header}>Hitta Hit</Text>
        <Image
          source={require('../assets/Googlemap-600x551.jpg')}
          style={styles.img}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'wheat',
    flex: 1,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  header: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
  },
  img: {
    margin: 10,
    width: '110%',
    height: '70%',
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
    borderColor: '#888',
    borderWidth: 1,
  },
});
