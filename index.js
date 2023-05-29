/**
 * @format
 */

import * as React from 'react';

import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {ChatGptProvider} from './src/chatGPT';
import App from './App';
import {name as appName} from './app.json';

function Main() {
  return (
    <ChatGptProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </ChatGptProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
