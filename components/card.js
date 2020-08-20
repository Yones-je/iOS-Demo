import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
      <Icon name={props.icon} size={30} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  icon: {
    color: 'deepskyblue',
    alignSelf: 'center',
    position: 'absolute',
    left: 350,
    top: 40,
    //justifyContent: 'flex-end',
  },
});

/*const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    padding: 10,
  },
  cardText: {
    fontFamily: 'iciel Cadena',
    fontSize: 30,
    fontWeight: '800',
    color: 'white',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
*/
