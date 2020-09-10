import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';
import Card from '../components/card';
import MenuItem from '../components/menuItem';
import {useSelector} from 'react-redux';

export default function Menu({navigation}) {
  const products = useSelector((state) => state.products.availableProducts);
  const goToCart = () => {
    navigation.navigate('Cart');
  };
  const [showTacos, setShowTacos] = useState(false);
  const [showGrande, setShowGrande] = useState(false);
  const [showQuesa, setShowQuesa] = useState(false);
  const [showXtra, setShowXtra] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={{marginTop: 10, width: '100%', padding: 5}}
        onPress={() => {
          setShowTacos((prevState) => !prevState);
        }}>
        <Card icon={showTacos ? 'ios-chevron-up' : 'ios-chevron-down'}>
          <Text style={styles.cardHeader}>TACOS</Text>
          <View>
            <Text style={styles.cardTitle}>Med dubbel majstortilla</Text>
          </View>
          {showTacos && <MenuItem data={products[0]} />}
        </Card>
      </Pressable>
      <Pressable
        style={{marginTop: 5, padding: 5}}
        onPress={() => {
          setShowGrande((prevState) => !prevState);
        }}>
        <Card icon={showGrande ? 'ios-chevron-up' : 'ios-chevron-down'}>
          <Text style={styles.cardHeader}>TACOS GRANDES</Text>
          <View>
            <Text style={styles.cardTitle}>Stor vetetortilla med ost </Text>
          </View>
          {showGrande && <MenuItem data={products[1]} />}
        </Card>
      </Pressable>
      <Pressable
        style={{marginTop: 5, padding: 5}}
        onPress={() => {
          setShowQuesa((prevState) => !prevState);
        }}>
        <Card icon={showQuesa ? 'ios-chevron-up' : 'ios-chevron-down'}>
          <Text style={styles.cardHeader}>QUESADILLAS</Text>
          <Text style={styles.cardTitle}>Mellanstor vetetortilla med ost</Text>
          {showQuesa && <MenuItem data={products[2]} />}
        </Card>
      </Pressable>
      <Pressable
        style={{marginTop: 5, padding: 5, paddingBottom: 20}}
        onPress={() => {
          setShowXtra((prevState) => !prevState);
        }}>
        <Card icon={showXtra ? 'ios-chevron-up' : 'ios-chevron-down'}>
          <Text style={styles.cardHeader}>TILLBEHÖR & DRYCK</Text>
          <Text style={styles.cardTitle}>Smått & Gott</Text>
          {showXtra && <MenuItem data={products[3]} />}
        </Card>
      </Pressable>
      <Button onPress={goToCart} title="Gå Vidare till Kassan" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    padding: 10,
  },
  cardHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'violet',
    textAlign: 'center',
  },
  cardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: 'violet',
    marginHorizontal: 0,
    textAlign: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
});
