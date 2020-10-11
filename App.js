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
import NewsArticle from './components/NewsArticle';
import SavedArticles, { SavedArticlesStack } from './components/SavedArticles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack'
import { styles } from './components/styles';
import { theme } from './resources/colour-scheme/theme';

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: theme.primaryColor },
          headerTintColor: theme.textLight,
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Page' }}/>
      </Stack.Navigator>
  );
}

export const profile = ({navigation}) => {
  const [name, onChangeText] = React.useState('');
  return (
  <View style={styles.container}>
    <Image style={{height:200,width:200,borderRadius:200/2}} source={require("./resources/dude.jpg")}/>
    <Text textAlign = {"center"} style={{fontSize:30, color: theme.primaryColor}}> User Name </Text>
    <TouchableOpacity style = {styles.settings}>
      <Text style ={{color: theme.primaryColor,fontSize:20,paddingRight:105,marginTop:4}}> Categories </Text>
      <Icon name="rightcircleo" size={25} color={theme.primaryColor} style={{marginTop:5}}/>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.settings} onPress={() => navigation.navigate('SavedArticles')}>
      <Text style ={{color: theme.primaryColor,fontSize:20,paddingRight:74,marginTop:4}}> Saved Articles </Text>
      <Icon name="rightcircleo" size={25} color={theme.primaryColor} style={{marginTop:5}}/>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.settings} onPress={() => navigation.navigate('Login')}>
      <Text style ={{color: theme.primaryColor,fontSize:20,paddingRight:140,marginTop:4}}> Logout </Text>
      <Icon name="rightcircleo" size={25} color={theme.primaryColor} style={{marginTop:5}}/>
    </TouchableOpacity>
  </View>
  )
}

function HappeningStack(){
    return(
        <Stack.Navigator
            initialRouteName="Happening"
            screenOptions={{
                headerStyle: { backgroundColor: theme.primaryColor },
                headerTintColor: theme.textLight,
                headerTitleStyle: { fontWeight: 'bold' }
      }}>
        <Stack.Screen
            name="Happening News"
            component={HappeningScreen}
            options={{ title: 'Happening News' }}/>
        
    </Stack.Navigator>
    );
}

function ProfileStack(){
    return(
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerStyle: { backgroundColor: theme.primaryColor },
                headerTintColor: theme.textLight,
                headerTitleStyle: { fontWeight: 'bold' }
      }}>
        <Stack.Screen
            name="User Profile"
            component={profile}
            options={{ title: 'User Profile' }}/>
        
    </Stack.Navigator>
    );
}

const AppStackNavigator = createStackNavigator();

function App (){
    return(
        <NavigationContainer>
          <AppStackNavigator.Navigator>
            <AppStackNavigator.Screen name = "Login" component ={Login} options={{headerShown:false}}/>
            <AppStackNavigator.Screen name = "SignUp" component ={SignUp} options={{headerShown:false}}/>
            <AppStackNavigator.Screen name = "Home" component ={HomePage} options={{headerShown:false}}/>
            <AppStackNavigator.Screen name = "profile" component = {profile} options={{headerShown: false}} />
            <AppStackNavigator.Screen name = "NewsArticle" component = {NewsArticle} options={{headerShown: false}} />
            <AppStackNavigator.Screen name = "SavedArticles" component = {SavedArticles} options={{headerShown: false}} />
          </AppStackNavigator.Navigator>
        </NavigationContainer>
    );
}

const HomePage = ({route, navigation}) =>{
    return (
      
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: theme.secondaryColour,
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
            name="SavedArticlesStack"
            component={SavedArticlesStack}
            options={{
              tabBarLabel: 'Saved Articles',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="newspaper"
                  color={color}
                  size={size}
                />
              ),
            }} />
            <Tab.Screen
                name = "UserProfile"
                component = {ProfileStack}
                options = {{
                    tabBarLabel:'Profile',
                    tabBarIcon:({color, size}) =>(
                        <MaterialCommunityIcons
                            name = "account"
                            color = {color}
                            size = {size}
                        />
                    ),
                }}/>
        </Tab.Navigator>
      
    );
  }

export default App;
