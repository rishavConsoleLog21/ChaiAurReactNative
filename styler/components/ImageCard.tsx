import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ImageCard = () => {
  return (
    <View>
      <Text style={styles.headText}>ImageCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/4124381/pexels-photo-4124381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mysore Palace</Text>
          <Text style={styles.cardLabel}>Mysore, Karnataka</Text>
          <Text style={styles.cardDescription}>
            Mysore Palace is a historical palace and a royal residence at Mysore
            in the Indian State of Karnataka.
          </Text>
          <Text style={styles.cardFooter}>
            Image by <Text style={{color: 'skyblue'}}>Mohit Suthar</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  headText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 6,
    margin: 8,
    padding: 8,
  },
  cardElevated: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  cardLabel: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 4,
  },
  cardDescription: {
    fontSize: 14,
    marginVertical: 4,
    color: '#333D79',
  },
  cardFooter: {
    fontSize: 12,
    marginVertical: 4,
  },
});
