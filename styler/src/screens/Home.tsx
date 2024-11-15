import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
        title="Go to details"
        //NOTE: 3 ways to navigate to another screen
        onPress={() => navigation.navigate('Details', {productId: 21})}
        // onPress={() => navigation.navigate('Details')}
        // onPress={() => navigation.push('Details', {productId: 21})} //NOTE: push is used to push the same screen again/callbackHell/profileHell(instagram)
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    color: 'red',
  },
});
