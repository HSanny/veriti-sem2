import React, {Component} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity,Image,Dimensions} from 'react-native'
import {createStackNavigator, createAppContainer} from '@react-navigation/stack'
import 'react-native-gesture-handler'
import RegisterPage from '../screens/RegisterPage'
import HomePage from '../screens/HomePage'
import { NavigationContainer, StackActions } from '@react-navigation/native';

export class LoginPage extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Image style = {{
                    aspectRatio: 0.5,
                    resizeMode: 'contain'}}
                    source = {require('../resources/icon.png')}
                />
                <View style = {styles.textfileds}>
                    <TextInput style = {styles.input}
                        placeholder = "username"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />
                    <TextInput style = {styles.input}
                        placeholder = "password"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Home')}> 
                        <Text style = {styles.buttontext}> Login </Text>
                    </TouchableOpacity>
                    <Button
                        title = "Register Here"
                        color = "#1abc9c"
                        onPress = {() => this.props.navigation.navigate('Register')}
                        />
                </View>
            </View>
        )
    }
}

// export default class App extends Component {
//     render(){
//         return(
//             <AppStackNavigator/>
//         );
//     }
// }


const AppStackNavigator = createStackNavigator();


export default function App (){
    return(
        <NavigationContainer>
          <AppStackNavigator.Navigator>
            <AppStackNavigator.Screen name = "Login" component ={LoginPage}/>
            <AppStackNavigator.Screen name = "Register" component ={RegisterPage}/>
            <AppStackNavigator.Screen name = "Home" component ={HomePage}/>
          </AppStackNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = {
    container:{
        flex : 1,
        backgroundColor : '#DFDACD',
        justifyContent: 'center',
        alignItems : 'stretch'
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
}