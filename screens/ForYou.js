import React, {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

export default class ForYou extends Component{
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

const styles = {
    container :{
        padding:20,
        flex:1,
        backgroundColor : 'ecf0f1',
        justifyContent : 'center',
        alighItems : 'stretch'
    },
    text:{
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    }
}
