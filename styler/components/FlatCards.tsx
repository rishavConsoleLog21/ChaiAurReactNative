import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headText}>FlatCards</Text>
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>LightBlue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.card, styles.cardFive]}>
          <Text>Purple</Text>
        </View>
        <View style={[styles.card, styles.cardSix]}>
          <Text>Orange</Text>
        </View>
        <View style={[styles.card, styles.cardSeven]}>
          <Text>Pink</Text>
        </View>
        <View style={[styles.card, styles.cardEight]}>
          <Text>Gray</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, // Adjust width for better visibility
    height: 100,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
  },
  cardOne: {backgroundColor: '#FF204E'}, // Red
  cardTwo: {backgroundColor: '#00FF9C'}, // Green
  cardThree: {backgroundColor: '#00BFFF'}, // LightBlue
  cardFour: {backgroundColor: '#FFD700'}, // Yellow
  cardFive: {backgroundColor: '#8A2BE2'}, // Purple
  cardSix: {backgroundColor: '#FFA500'}, // Orange
  cardSeven: {backgroundColor: '#FF69B4'}, // Pink
  cardEight: {backgroundColor: '#808080'}, // Gray
});
