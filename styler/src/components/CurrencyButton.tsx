import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type CurrencyBtnProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyBtnProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CDC1FF',
    borderRadius: 6,
  },
  flag: {
    fontSize: 26,
    marginBottom: 4,
  },
  country: {
    fontSize: 16,
    color: 'black',
  },
});

export default CurrencyButton;
