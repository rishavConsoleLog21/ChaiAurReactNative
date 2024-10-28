import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class ElevatedCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headText}>ElevatedCard</Text>
        <ScrollView horizontal={true} style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>From</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Right</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Left</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>See</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Me🎉</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, // Adjust width for better visibility
    height: 100,
    borderRadius: 6,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#808080',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#8A2BE2',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
