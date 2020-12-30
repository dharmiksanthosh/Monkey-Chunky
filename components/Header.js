import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Monkey Chunky</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: { backgroundColor: 'green' },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
});

export default Header;