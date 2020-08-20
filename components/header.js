import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';

export default function header({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerTitle}>
        <ImageBackground
          source={require('../assets/laneta-logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
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
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    color: '#333',
    letterSpacing: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerImage: {
    width: 150,
    height: 103,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 15,
    alignSelf: 'center',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

// Dimensions.get('screen').width
//  <Icon name="ios-menu" size={40} style={styles.icon} onPress={openMenu} />
