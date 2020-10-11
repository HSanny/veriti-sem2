import { Component } from 'react';
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Newscategories from "./Newscategories";
import ForYou from './ForYou';
import InAus from './InAus';
import HappenGlobal from './HappenGlobal';

export const Stack = createStackNavigator();


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

export default function HomePage() {
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

export const Home = ({ navigation }) => {
    let newsbox = 200
  return (
    <ScrollView style={{backgroundColor: "#ff6622"}}>

    <TouchableNativeFeedback onPress={() => navigation.navigate('profile')}>
      <Icon name="user" size={30} color="#35246A" style={{position:"absolute", top:30,right:30, zIndex:1}} />
    </TouchableNativeFeedback>

      <View>
        <Text style={{fontWeight :'bold', fontSize: 22, padding: 30}}>
          Happening in Australia
        </Text>
        <View style = {{height: newsbox, flex:1}}>
          <ScrollView horizontal = {true} contentContainerStyle={{ paddingLeft:20, flexGrow: 1}}  showsHorizontalScrollIndicator={false}>
            <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed " />
          <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed" />
          <Newscategories imagesource={{ uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed" />
          <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed" />
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={{fontWeight :'bold', fontSize: 22, padding: 30}}>
          Happening Globally
        </Text>
        <View style = {{height: newsbox, flex:1}}>
          <ScrollView horizontal = {true} contentContainerStyle={{ paddingLeft:20, flexGrow: 1}}  showsHorizontalScrollIndicator={false}>
            <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed " />
          <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed" />
          <Newscategories imagesource={{ uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed" />
          <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed" />
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={{fontWeight :'bold', fontSize: 22, padding: 30}}>
          For You
        </Text>
        <View style = {{height: newsbox, flex:1}}>
          <ScrollView horizontal = {true} contentContainerStyle={{ paddingLeft:20, flexGrow: 1}}  showsHorizontalScrollIndicator={false}>
            <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed " />
          <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed" />
          <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed" />
          <Newscategories imagesource={{ uri: 'https://imageresizer.static9.net.au/iL1wz7t6ymcD86bayzOWbLTiFp8=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F39a838f6-f17d-4633-aada-fdf48d80a091'}} 
          newsdescription= "The true size of the ancient shark megalodon revealed" />
          </ScrollView>
        </View>
      </View>
  </ScrollView>
  
  );
}

export const HappeningScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Happening Screen
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate(
                'HappeningStack', { screen: 'HappeningInAus' }
              )}>
            <Text>Go to Happening in Aus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('HappeningGlobally')
            }>
            <Text>Go to Happen Globally</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Bottom Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
      },
    container:{
        flex : 1,
        backgroundColor : '#DFDACD',
        justifyContent: 'center',
        alignItems : 'center'
    },
    input:{
        height: 40, 
        backgroundColor: "white",
        borderColor: 'white', 
        borderWidth: 2,
        borderRadius: 10,
        textAlign:"center",
        width: 230,
        fontSize:18,

    },
    
    buttoncontainer:{
        borderColor:"#35246A", 
        borderWidth: 2,
        borderRadius: 10,
        width:100,
        height:50, 
        alignItems:'center',
        padding:10,
        backgroundColor:'#35246A'
    },
    buttontext:{
        textAlign:"center",
        color:"white",
        fontSize:18
    }
});
