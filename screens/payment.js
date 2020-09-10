import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Payment({route, navigation}) {
  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [cvv, setCVV] = useState();
  const [cvvVisible, setCVVVisible] = useState(false);
  const {status} = route.params;
  const {total} = route.params;

  const onCVVIconPress = () => {
    setCVVVisible(!cvvVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Betala med:</Text>
      <View style={styles.applePay}>
        <Icon name="logo-apple" size={25} color="white" />
        <Text style={styles.buttonText}>Pay</Text>
      </View>
      <Text style={styles.text}>Eller via kortbetalning:</Text>
      <Text style={styles.text}>Kortnummer:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        keyboardType="numeric"
        placeholder="1234 3456 5677 8899"
        maxLength={19}
        backgroundColor="white"
      />
      <View style={styles.middle}>
        <Text style={styles.textMiddle}>Utgångsdatum (MM/ÅÅ):</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          keyboardType="numeric"
          placeholder="MMÅÅ"
          maxLength={5}
          backgroundColor="white"
        />
        <Text style={styles.textMiddle}>CVV:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCVV}
          keyboardType="numeric"
          placeholder="***"
          maxLength={5}
          caretHidden={!cvvVisible}
          backgroundColor="white"
        />
      </View>
      <Text style={styles.text}>Kortinnehavarens Namn:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Namn Efternamn"
        backgroundColor="white"
      />
      <Button
        title={`Betala ${total}kr`}
        onPress={() => {
          navigation.navigate('OrderStatus', {
            status: status,
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    paddingHorizontal: 4,
    paddingVertical: 24,
  },
  applePay: {
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '50%',
    height: '10%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonText: {
    fontSize: 20,
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
    borderRadius: 10,
    paddingHorizontal: 5,
    height: 40,
  },
  textMiddle: {
    fontSize: 16,
  },
});
