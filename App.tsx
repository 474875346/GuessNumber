/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(Math.round(Math.random() * 100));
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const doGuess = () => {
    const newCount = count + 1;
    setCount(newCount);
    const numberValue = parseInt(text);
    if (number === numberValue) {
      Alert.alert('猜中了,你一共猜了' + count + '次');
      setNumber(Math.round(Math.random() * 100));
    } else if (numberValue < number) {
      Alert.alert('猜小了');
    } else if (numberValue > number) {
      Alert.alert('猜大了');
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput
          placeholder="请输入数字0-100"
          style={styles.input}
          value={text}
          onChangeText={setText}
        />
        <Button title="猜" onPress={doGuess} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#000',
    margin: 20,
    height: 50,
    fontSize: 23,
    paddingLeft: 10,
  },
});

export default App;
