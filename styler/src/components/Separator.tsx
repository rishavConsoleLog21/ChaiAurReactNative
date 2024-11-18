import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#E0E0E0',
  },
});
export default Separator;
