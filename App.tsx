/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

// import DevBot from './utils/bots/DevBot';
import {TextInput} from 'react-native-paper';
import {useChatGpt} from './src/chatGPT';

function App(): JSX.Element {
  const [prompt, setPrompt] = useState('');
  const {status} = useChatGpt();

  useEffect(() => {
    console.log('Status: ', status);
  }, [status]);

  const handleSendPrompt = () => {
    if (prompt.trim() === '') {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={{flex: 1}}>
        <View style={styles.containerInput}>
          <TextInput
            value={prompt}
            onChangeText={text => setPrompt(text)}
            placeholder="Enter the prompt"
            multiline={true}
            right={
              <TextInput.Icon
                icon="send"
                color="blue"
                onPress={handleSendPrompt}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  containerView: {
    // backgroundColor: 'yellow',
  },
  containerInput: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
  },
});

export default App;
