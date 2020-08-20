import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

export default function Payment({navigation}) {
  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [cvv, setCVV] = useState();
  const [cvvVisible, setCVVVisible] = useState(false);

  const onCVVIconPress = () => {
    setCVVVisible(!cvvVisible);
  };

  return (
    <View style={StyleSheet.container}>
      <Text style={styles.text}>Kortnummer:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        keyboardType="numeric"
        placeholder="1234 3456 5677 8899"
        maxLength={19}
      />
      <View style={styles.middle}>
        <Text style={styles.textMiddle}>Utgångsdatum (MM/ÅÅ):</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          keyboardType="numeric"
          placeholder="MMÅÅ"
          maxLength={5}
        />
        <Text style={styles.textMiddle}>CVV:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCVV}
          keyboardType="numeric"
          placeholder="***"
          maxLength={5}
          caretHidden={!cvvVisible}
        />
      </View>
      <Text style={styles.text}>Kortinnehavarens Namn:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Namn Efternamn"
      />
      <Button
        title="Betala Nu"
        onPress={() => {
          navigation.navigate('OrderStatus');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingHorizontal: 4,
    paddingVertical: 24,
  },
  text: {
    marginLeft: 12,
    marginTop: 30,
    fontSize: 18,
  },
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    marginHorizontal: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 5,
    height: 40,
  },
  textMiddle: {
    fontSize: 16,
  },
});
