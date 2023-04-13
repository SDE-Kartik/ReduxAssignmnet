/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Navigation from './src/Navigation/MainNavigation';
import {Provider} from 'react-redux';
import {useEffect} from 'react';
import {getWeather} from './src/ReduxStore/Actions';
import Store from './src/ReduxStore/Store';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}


export default App;
