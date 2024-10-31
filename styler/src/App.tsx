import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  StyleSheet,
  StatusBar,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import FlatCards from '../components/FlatCards';
import ElevatedCard from '../components/ElevatedCard';
import ImageCard from '../components/ImageCard';
import ActionCard from '../components/ActionCard';
import ContactList from '../components/ContactList';
import PasswordGenerator from '../components/PasswordGenerator';
import ColorChanger from '../components/ColorChanger';
import RollDice from '../components/RollDice';
import CurrenciesConverter from '../components/CurrenciesConverter';

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';
  //NOTE: Commenting the code in return statement will give warning in the console
  //     <View
  //       style={
  //         isDarkMode
  //           ? [styles.container, styles.black]
  //           : [styles.container, styles.white]
  //       }>
  //       <FlatCards />
  //       <ElevatedCard />
  //       <ImageCard />
  //       <ActionCard />
  //       <ContactList />
  //     </View>
  //       <PasswordGenerator />
  //<ColorChanger />
  // <RollDice />;

  return (
    <>
      <CurrenciesConverter />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
