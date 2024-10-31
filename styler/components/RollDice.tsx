import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />;
    </View>
  );
};

export default function RollDice() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    const diceImages = [
      DiceOne,
      DiceTwo,
      DiceThree,
      DiceFour,
      DiceFive,
      DiceSix,
    ];
    const randomNumber = Math.floor(Math.random() * diceImages.length);
    setDiceImage(diceImages[randomNumber]);
    ReactNativeHapticFeedback.trigger('impactMedium', options);
  };

  //   const roolDice = () => {
  //     let randowNumber = Math.floor(Math.random() * 6) + 1;

  //     switch (randowNumber) {
  //       case 1:
  //         setDiceImage(DiceOne);
  //         break;
  //       case 2:
  //         setDiceImage(DiceTwo);
  //         break;
  //       case 3:
  //         setDiceImage(DiceThree);
  //         break;
  //       case 4:
  //         setDiceImage(DiceFour);
  //         break;
  //       case 5:
  //         setDiceImage(DiceFive);
  //         break;
  //       case 6:
  //         setDiceImage(DiceSix);
  //         break;
  //       default:
  //         setDiceImage(DiceOne);
  //         break;
  //     }
  //     // Trigger haptic feedback
  //     ReactNativeHapticFeedback.trigger('impactMedium', options);
  //   };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});