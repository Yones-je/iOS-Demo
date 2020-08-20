import React from 'react';
import {Pressable, View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ImageButton(props) {
  return (
    <View style={styles.view}>
      <Pressable style={styles.touchable} onPress={props.onPress}>
        <Image
          source={require('../assets/botona_azul.png')}
          style={styles.image}
        />
        <Text style={styles.text}>{props.title}</Text>
        <Icon name="arrow-forward" size={50} style={styles.icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'transparent',
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 16,
    color: '#fff',
    top: 10,
  },
  image: {},
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'iciel Cadena',
    fontSize: 40,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 1,
    textAlign: 'center',
    position: 'absolute',
    top: 5,
  },
});
