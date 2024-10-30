import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function ColorChanger() {
  const [changeBg, setChangeBg] = useState('white');
  const [changeCricleColor, setChangeCricleColor] = useState('black');
  const [changeTriangelColor, setchangeTriangelColor] = useState('black');
  const [changeButtonColor, setChangeButtonColor] = useState('black');

  const changeBgColor = () => {
    const hexRange = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setChangeBg(newColor);
  };

  const changeColorCircle = () => {
    const hexRange = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setChangeCricleColor(newColor);
  };

  const changeColorTriangel = () => {
    const hexRange = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setchangeTriangelColor(newColor);
  };

  const changeColorButton = () => {
    const hexRange = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setChangeButtonColor(newColor);
  };

  return (
    <>
      <StatusBar backgroundColor={changeBg} barStyle="light-content" />
      <View style={[styles.container, {backgroundColor: changeBg}]}>
        <View>
          <Pressable
            onPress={() => {
              changeBgColor();
              changeColorButton();
            }}>
            <View
              style={[
                styles.actionButton,
                {backgroundColor: changeButtonColor},
              ]}>
              <Text style={styles.actionButtonText}>Background</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={changeColorCircle}>
            <View
              style={[
                {backgroundColor: changeCricleColor},
                styles.circleButton,
              ]}>
              <Text style={styles.actionButtonText}>Circle</Text>
            </View>
          </Pressable>
          <View>
            <Pressable onPress={changeColorTriangel}>
              <View
                style={[
                  {borderBottomColor: changeTriangelColor},
                  styles.triangelButton,
                ]}>
                <Text style={styles.triangelButtonText}>Triangel</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  actionButtonText: {
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
    textAlignVertical: 'bottom',
  },
  circleButton: {
    marginTop: 20,
    borderRadius: '100%',
    padding: 50,
  },
  triangelButton: {
    marginTop: 20,
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  triangelButtonText: {
    fontSize: 20,
    color: 'black',
    textTransform: 'uppercase',
    marginTop: 50,
    marginLeft: 10,
  },
});
