import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import ImageCard from './components/ImageCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCard />
          <ImageCard />
          <ImageCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
