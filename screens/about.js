import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Om Oss</Text>
      <Text>Kontaktinformation: ipsem lorum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
