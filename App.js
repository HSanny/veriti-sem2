/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Login from './components/Login';
import { Home, HappeningScreen, Stack } from "./components/Home";
import ForYou from './components/ForYou';
import SignUp from "./components/SignUp";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack'

/*
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login} options={{ headerShown: false }
  }/>
        <Stack.Screen name = "SignIn" component = {SignUp}  options={{ headerShown: false }} />
        <Stack.Screen name = "homescreen" component = {Home} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
*/
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Page' }}/>
      </Stack.Navigator>
  );
}

function HappeningStack(){
    return(
        <Stack.Navigator
            initialRouteName="Happening"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
      }}>
        <Stack.Screen
            name="Happening News"
            component={HappeningScreen}
            options={{ title: 'Happening News' }}/>
        
    </Stack.Navigator>
    );
}

const AppStackNavigator = createStackNavigator();
function App (){
    return(
        <NavigationContainer>
          <AppStackNavigator.Navigator>
            <AppStackNavigator.Screen name = "Login" component ={Login} options={{headerShown:false}}/>
            <AppStackNavigator.Screen name = "Register" component ={SignUp} options={{headerShown:false}}/>
            <AppStackNavigator.Screen name = "Home" component ={HomePage} options={{headerShown:false}}/>
          </AppStackNavigator.Navigator>
        </NavigationContainer>
    );
}

function HomePage() {
    return (
      
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#42f44b',
          }}>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={size}
                />
              ),
            }}  />
          <Tab.Screen
            name="HappeningStack"
            component={HappeningStack}
            options={{
              tabBarLabel: 'Happening',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={size}
                />
              ),
            }} />
            <Tab.Screen
                name = "ForYou"
                component = {ForYou}
                options = {{
                    tabBarLabel:'ForYou',
                    tabBarIcon:({color, size}) =>(
                        <MaterialCommunityIcons
                            name = "home"
                            color = {color}
                            size = {size}
                        />
                    ),
                }}/>
        </Tab.Navigator>
      
    );
  }


export default App;
