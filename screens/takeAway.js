import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const takeAway = ({navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('datetime');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.main}>
      <Text style={{marginTop: 20, fontSize: 20}}>
        När vill du hämta din mat?
      </Text>
      <Button
        color={'deepskyblue'}
        title="Välj Datum"
        onPress={showDatepicker}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Button
        color={'deepskyblue'}
        title="Fortsätt till menyn"
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
