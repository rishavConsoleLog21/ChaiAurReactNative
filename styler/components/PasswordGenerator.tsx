import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

//Form valication
import * as Yup from 'yup';
import {Formik} from 'formik';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .required('Password length is required')
    .lessThan(6, 'Password should be minimum 6 characters')
    .max(20, 'Password should be maximum 20 characters')
    .integer()
    .positive()
    .typeError('Password length should be a number'),
});

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numeric, setNumeric] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let characterList = '';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericCharacters = '0123456789';
    const specialCharacters = '!@#$%^&*()_+{}|:"<>?-=[];,./';

    if (lowerCase) {
      characterList += lowerCaseCharacters;
    }
    if (upperCase) {
      characterList += upperCaseCharacters;
    }
    if (numeric) {
      characterList += numericCharacters;
    }
    if (specialCharacter) {
      characterList += specialCharacters;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      result += characters.charAt(
        Math.round(Math.random() * characters.length),
      );
    }
    console.log('result', result);
    console.log('rishav');
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumeric(false);
    setSpecialCharacter(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log('values', values);
              generatePassword(+values.passwordLength); //HACK: Convert string to number //NOTE:(number(values.passwordLength));
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {errors.passwordLength && touched.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    placeholder="Between 6-20"
                    onChangeText={handleChange('passwordLength')}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>LowerCase </Text>
                  <BouncyCheckbox
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#5DA3FA"
                    iconStyle={{borderColor: '#5DA3FA'}}
                    accessibilityHint="This is a checkbox for LowerCase"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Some UpperCase </Text>
                    <BouncyCheckbox
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor="#5DA3FA"
                      iconStyle={{borderColor: '#5DA3FA'}}
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>With Numeric </Text>
                  <BouncyCheckbox
                    isChecked={numeric}
                    onPress={() => setNumeric(!numeric)}
                    fillColor="#5DA3FA"
                    iconStyle={{borderColor: '#5DA3FA'}}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>
                    Cherry on Top Special Character{' '}
                  </Text>
                  <BouncyCheckbox
                    isChecked={specialCharacter}
                    onPress={() => setSpecialCharacter(!specialCharacter)}
                    fillColor="#5DA3FA"
                    iconStyle={{borderColor: '#5DA3FA'}}
                  />
                </View>

                <View style={styles.formActions}>
                  <Pressable
                    style={styles.primaryBtn}
                    onPress={() => {
                      handleSubmit();
                    }}
                    disabled={!isValid}>
                    <Text style={styles.primaryBtnTxt}>Generate</Text>
                  </Pressable>
                  <Pressable
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <View style={styles.passwordBox}>
              <Text selectable={true} style={styles.subTitle}>
                Password{' '}
                {<Text style={styles.generatedPassword}>{password}</Text>}
              </Text>
            </View>
            <Text style={styles.description}>*Long Press To Copy</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 8,
  },
  formContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#CDC1FF',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputStyle: {
    padding: 8,
    width: '40%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#5DA3FA',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    fontWeight: '500',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#FFCCEA',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#3B1E54',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'auto',
    marginBottom: 12,
    color: '#3B1E54',
  },
  passwordBox: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
