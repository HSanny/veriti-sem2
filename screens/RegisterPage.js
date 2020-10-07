import React, {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'


export default class RegisterPage extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.registerform}>
                    <TextInput style = {styles.input}
                        placeholder = "Enter your name "
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.emailinput.focus()}
                    />
                
                
                    <TextInput style = {styles.input}
                        placeholder = "Enter your email"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        ref = {(input) => this.emailInput = input}
                    />

                    <TextInput style = {styles.input}
                        placeholder = "Enter password"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Login')}>
                        <Text style = {styles.buttontext}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = {
    container:{
        padding: 10,
        flex : 1,
        backgroundColor : 'ecf0f1',
    },
    registerform:{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input:{
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize : 25,
        backgroundColor: 'white',
        borderColor:'#1abc9c',
        borderWidth: 1,
        marginBotton: 20,
        color: "#34495e"
    },
    buttoncontainer:{
        height: 50,
        borderRadius:50,
        backgroundColor:'1abc9c',
        paddingVertical:10,
        justifyContent:'center',
    },
    buttontext:{
        textAlign:'center',
        color:'#ecf0f1',
        fontSize:20
    }
}