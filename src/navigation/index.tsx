import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home/index';
import Login from '../screens/Login/index';

const Stack = createNativeStackNavigator();
const AuthStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
const NavigationProvider = () => {
  return <AuthStack />;
};
export default NavigationProvider;
