/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './components/Login';
import Homescreen from "./components/Home";
import SignUp from "./components/SignUp";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login} options={{ headerShown: false }
  }/>
        <Stack.Screen name ="SignIn" component = {SignUp}  options={{ headerShown: false }} />
        <Stack.Screen name = "homescreen" component = {Homescreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
