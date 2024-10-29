import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      first_name: 'Orazio',
      last_name: 'Flintuff',
      email: 'oflintuff0@java.com',
      image: 'http://dummyimage.com/222x100.png/5fa2dd/ffffff',
      gender: 'Cisgender Man',
    },
    {
      id: 2,
      first_name: 'Emmalynne',
      last_name: 'Dugall',
      email: 'edugall1@sohu.com',
      image: 'http://dummyimage.com/113x100.png/ff4444/ffffff',
      gender: 'Transgender',
    },
    {
      id: 3,
      first_name: 'Claire',
      last_name: 'Letherbury',
      email: 'cletherbury2@rediff.com',
      image: 'http://dummyimage.com/166x100.png/cc0000/ffffff',
      gender: 'Cisgender Man',
    },
    {
      id: 4,
      first_name: 'Christen',
      last_name: 'Houten',
      email: 'chouten3@fastcompany.com',
      image: 'http://dummyimage.com/226x100.png/cc0000/ffffff',
      gender: 'Cisgender',
    },
    {
      id: 5,
      first_name: 'Minta',
      last_name: 'Feitosa',
      email: 'mfeitosa4@un.org',
      image: 'http://dummyimage.com/242x100.png/dddddd/000000',
      gender: 'Trans Woman',
    },
  ];
  return (
    <View>
      <Text style={styles.headText}>ContactList</Text>
      <ScrollView style={styles.contactContainer} scrollEnabled={false}>
        {contacts.map(({id, first_name, last_name, email, image, gender}) => (
          <View key={id} style={styles.userCard}>
            <Image
              source={{
                uri: image,
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 60 / 2,
                marginRight: 10,
              }}
            />
            <Text style={styles.userDetails}>{first_name}</Text>
            <Text style={styles.userDetails}>{last_name} |</Text>
            <Text style={styles.userDetails}>{email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  contactContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#BFECFF',
    padding: 8,
    borderRadius: 14,
  },
  userDetails: {
    fontSize: 12,
    margin: 2,
    fontWeight: 'bold',
  },
});
