import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function Badge() {
  const [showBadge, setShowBadge] = useState(false);
  const badgeValue = useSelector((state) => state.cart.count);
  //const badgeValue = cartItems.length;
  if (badgeValue > 0) {
    () => setShowBadge((prevState) => !prevState);
  }

  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{badgeValue}</Text>
    </View>
  );
}
/*return (
    <>
      {() =>
        showBadge
          ? () => (
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{badgeValue}</Text>
              </View>
            )
          : null
      }
    </>
  );*/

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    top: 3,
    right: 0,
    left: 0,
    bottom: 0,
    borderRadius: 9,
    height: 18,
    minWidth: 0,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    backgroundColor: 'red',
    opacity: 0.75,
  },
  badgeText: {
    fontSize: 10,
    paddingHorizontal: 0,
    color: 'white',
    fontWeight: 'bold',
  },
});
