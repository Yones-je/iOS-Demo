import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const takeAway = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text>När vill du hämta din mat?</Text>
      <Button
        color={'deepskyblue'}
        title="Fortsätt"
        onPress={() => {
          navigation.navigate('Menu');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'wheat',
    flex: 1,
    padding: 20,
  },
});

export default takeAway;
