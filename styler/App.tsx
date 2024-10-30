import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import ImageCard from './components/ImageCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import PasswordGenerator from './components/PasswordGenerator';
import ColorChanger from './components/ColorChanger';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
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
    <ColorChanger />
  );
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
