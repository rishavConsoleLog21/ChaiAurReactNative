import {
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const openLink = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text
        style={[
          isDarkMode
            ? [styles.container, styles.white]
            : [styles.container, styles.black],
          styles.headTitle,
        ]}>
        ActionCard
      </Text>
      <View style={[styles.container, styles.elevatedCard]}>
        <View style={styles.headContainer}>
          <Text style={styles.headText}>Card 1</Text>
        </View>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            React Native is an open-source UI software framework developed by
            Meta Platforms. It is used to develop applications for Android,
            Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling
            developers to use the React framework along with native platform
            capabilities.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.socialLink}
            onPress={() => openLink('https://www.rishavconsolelog.works/')}>
            <Text>Portfolio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialLink}
            onPress={() => openLink('https://github.com/rishavconsolelog21/')}>
            <Text>Github</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  elevatedCard: {
    backgroundColor: '#FFC7C7',
    borderRadius: 5,
    shadowColor: 'skyblue',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  bodyContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  socialLink: {
    padding: 10,
    backgroundColor: '#FF69B4',
    margin: 10,
    borderRadius: 5,
  },
  white: {
    color: 'white',
  },
  black: {
    color: 'black',
  },
});
