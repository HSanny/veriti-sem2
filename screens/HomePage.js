import React, {Component} from 'react';
import {Text, TextInput, View, TouchableOpacity,Image,StyleSheet} from 'react-native'
import {createStackNavigator, createAppContainer} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InAus from '../screens/InAus'
import Global from '../screens/Global'
import ForYou from '../screens/ForYou'

export default class HomePage extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Welcome to the HomePage
                </Text>
            </View>
        );
    }
}

const BottomTabs = createBottomTabNavigator({
    InAus:{
        screen:InAus,
        navigationOptions:({navigation}) => ({
            tabBarIcon : ({focused, tintColor}) => {
                return <Icon name ="dot-circle-o" size = {20} color = {tintColor}/>
            }
        })
    },
    Global:{
        screen:Global,
        navigationOptions:({navigation}) => ({
            tabBarIcon : ({focused, tintColor}) => {
                return <Icon name = "file-text" size = {20} color = {tintColor}/>
            }
        })
    },
    ForYou:{
        screen:ForYou,
        navigationOptions:({navigation}) => ({
            tabBarIcon : ({focused, tintColor}) => {
                return <Icon name = "file-text" size = {20} color = {tintColor}/>
            }
        })
    },
},{
    tabBarOptions:{
        activeTintColor : '#ff4757',
        inactiveTintColor : 'black',
        activeBackgroundColor : '#114e52',
        labelStyle:{
            fontSize : 13,
        },
        style:{
            backgroundColor : '#86dfe5'
        },
    }
})


  
 export const switched = createAppContainer(
      createSwitchNavigator({
          InAus : InAus,
          AppStack : BottomTabs
      })
  )
