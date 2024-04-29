import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {RouteParamTypes} from './RouteParamTypes';
import colors from '../theme/colors';
import {ScreenNameKeys} from '../constants/ScreenNameKeys';
import Login from '../screens/PreLogin/Login';
import HomeTabs from './HomeTabs';
import ScrollToIndex from '../screens/Dashboard/Home/ScrollToIndex';

const Stack = createStackNavigator<RouteParamTypes>();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};
const Routes = () => {
  return (
    <NavigationContainer  theme={MyTheme}>
      <Stack.Navigator initialRouteName={ScreenNameKeys.LOGIN} screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNameKeys.LOGIN} component={Login} />
        <Stack.Screen name={ScreenNameKeys.HOME_TAB} component={HomeTabs} />
        <Stack.Screen name={ScreenNameKeys.SCROLL_TO_INDEX} component={ScrollToIndex} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
