import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import React from 'react';
import FlatCards from '../components/FlatCards';
import ElevatedCard from '../components/ElevatedCard';
import ImageCard from '../components/ImageCard';
import ActionCard from '../components/ActionCard';
import ContactList from '../components/ContactList';
import PasswordGenerator from '../components/PasswordGenerator';
import ColorChanger from '../components/ColorChanger';
import RollDice from '../components/RollDice';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  //NOTE: Commenting the code in return statement will give warning in the console
  // <SafeAreaView>
  //   <ScrollView>
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
  //   </ScrollView>
  // </SafeAreaView>
  //       <PasswordGenerator />
  //<ColorChanger />
  return <RollDice />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  white: {
    backgroundColor: 'white',
  },
  black: {
    backgroundColor: 'black',
  },
});

export default App;
