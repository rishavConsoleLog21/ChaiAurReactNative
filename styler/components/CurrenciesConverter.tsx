import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

import {CURRENCIES} from '../src/constants';
import CurrencyButton from '../src/components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

const CurrenciesConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const buttonPressHandler = (selectedCurrency: Currency) => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Please enter a value',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * selectedCurrency.value;
      const result = `${selectedCurrency.symbol} ${convertedValue.toFixed(
        2,
      )}💸`;
      setResultValue(convertedValue);
      setSelectedCurrency(selectedCurrency.name);
      Snackbar.show({
        text: result,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#2ecc71',
        textColor: '#000000',
        action: {
          text: 'Dismiss',
          textColor: '#000000',
          onPress: Snackbar.dismiss,
        },
      });
    } else {
      Snackbar.show({
        text: 'Not a valid number. Please try again',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={10}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={setInputValue}
              keyboardType="numeric"
              placeholder="Enter the amount in INR"
              style={styles.inputAmountField}
            />
          </View>
          {resultValue ? (
            <Text style={styles.resultTxt}>
              {selectedCurrency} {resultValue}
            </Text>
          ) : null}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={CURRENCIES}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  selectedCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPressHandler(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#FFE2E2',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultTxt: {
    fontSize: 30,
    color: '#000000',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    width: 'auto',
    height: 60,
  },
  inputAmountField: {
    height: 50,
    width: 'auto',
    padding: 6,
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: '#CDC1FF',
    fontSize: 30,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default CurrenciesConverter;
