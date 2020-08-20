import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ImageButton from '../components/imageButton';

export default function Home({navigation}) {
  const eatHere = () => navigation.navigate('Menu');
  const takeAway = () => navigation.navigate('takeAway');

  return (
    <View style={styles.main}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/banner3.jpg')}
          style={styles.img}
          resizeMode="cover"
        />
      </View>
      <View style={styles.container}>
        <ImageButton title="Äta Här" onPress={eatHere} />
        <ImageButton title="Take Away" onPress={takeAway} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'wheat',
  },
  container: {
    position: 'absolute',
    top: 300,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    padding: 10,
    marginTop: 35,
  },
  imgContainer: {
    flex: 0.6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '100%',
    width: 500,
    borderBottomColor: '#888',
    borderBottomWidth: 2,
  },
  img: {
    width: '100%',
    height: '100%',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    justifyContent: 'center',
  },
});
