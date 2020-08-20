import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {Dimensions} from 'react-native';

export default function headerDos({title}) {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerTitle}>
        <ImageBackground
          source={require('../assets/laneta-azul.png')}
          style={styles.headerImage}>
          <Text style={styles.headerText}>{title}</Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  headerText: {
    fontWeight: '900',
    fontSize: 33,
    fontFamily: 'iciel Cadena',
    color: 'white',
    letterSpacing: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 18,
  },
  headerImage: {
    width: 150,
    height: 103,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

// Dimensions.get('screen').width
