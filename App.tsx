/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';

import Routes from './src/navigation';
import colors from './src/theme/colors';


function App(): React.JSX.Element {

  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor={colors.black}/>
    <Routes />
    </>
  );
}

export default App;
