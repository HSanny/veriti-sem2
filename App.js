/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Newscategories from './components/Newscategories'
import Icon from 'react-native-vector-icons/AntDesign';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  TextView,
  Image,
  Dimensions
} from 'react-native';

import Login from './components/Login';
import { Home, HappeningScreen, Stack } from "./components/Home";
import ForYou from './components/ForYou';
import SignUp from "./components/SignUp";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack'
import { styles } from './components/styles';


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

const profile = () => {
  const [name, onChangeText] = React.useState('');
  return (
  <View style={styles.container}>
    <Image style={{height:200,width:200,borderRadius:200/2}} source={require("./resources/dude.jpg")}/>
    <Text textAlign = {"center"} style={{fontSize:30, color:"#35246A"}}> User Name </Text>
    <TouchableOpacity style = {styles.settings}>
      <Text style ={{color:'#35246A',fontSize:20,paddingRight:105,marginTop:4}}> Categories </Text>
      <Icon name="rightcircleo" size={25} color="#35246A" style={{marginTop:5}}/>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.settings}>
      <Text style ={{color:'#35246A',fontSize:20,paddingRight:74,marginTop:4}}> Saved Articles </Text>
      <Icon name="rightcircleo" size={25} color="#35246A" style={{marginTop:5}}/>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.settings}>
      <Text style ={{color:'#35246A',fontSize:20,paddingRight:140,marginTop:4}}> Logout </Text>
      <Icon name="rightcircleo" size={25} color="#35246A" style={{marginTop:5}}/>
    </TouchableOpacity>
  </View>
  )
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
            <AppStackNavigator.Screen name = "profile" component = {profile} options={{headerShown: false}} />
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
