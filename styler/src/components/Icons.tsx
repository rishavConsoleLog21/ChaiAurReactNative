import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
  size?: number;
  color?: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'cross':
      return <Icon name="times" size={40} color="#F7CD2E" />;
    case 'circle':
      return <Icon name="circle" size={40} color="#38CC77" />;
    default:
      return <Icon name="pencil" size={40} color="#0D0D0D" />;
  }
};

export default Icons;

const styles = StyleSheet.create({});
