import React, {Component} from 'react';
import {Text, TextInput, View, TouchableOpacity,Image,StyleSheet} from 'react-native'
import {createStackNavigator, createAppContainer} from '@react-navigation/stack'
import 'react-native-gesture-handler'
import {RegisterPage} from '../screens/RegisterPage'
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
                <View style = {{padding:10}}> 
                    <TextInput textAlign = {"left"}
                            style={styles.input}
                            placeholder="User Name"
                            returnKeyType = "next"
                            onSubmitEditing = {() => this.passwordInput.focus()}
                            //onChangeText={text => {onChangeText(text)}}
                            //defaultValue={userName}
                    />
                 </View>
      
                <View style = {{padding:10,paddingBottom:30,}}>
                    <TextInput secureTextEntry = {true}
                        style={styles.input} 
                        //onChangeText={text => onChangeText2(text)}
                        placeholder="Password" 
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                        //defaultValue={password}
                    />
                </View>
      
                <View style = {{alignItems: 'center',flexDirection:'row', paddingBottom:10}}>
                    <View style = {{paddingRight:30,}}>  
                        <TouchableOpacity style = {styles.buttoncontainer} onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style = {styles.buttonText}> Login </Text>
                        </TouchableOpacity>
                    </View>   
                    <TouchableOpacity style = {styles.buttoncontainer} onPress={() => this.props.navigation.navigate('Register')} >
                        <Text style = {styles.buttonText}> Sign up </Text>
                    </TouchableOpacity>
                </View>
                <Text>or you can sign in with</Text>
                <View style ={{alignItems: 'center',flexDirection:'row', paddingBottom:10, justifyContent:"space-evenly"}}>
                <TouchableOpacity>   
                    <Image style={{height: 100, resizeMode: 'contain'}} source={require('../resources/g.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>   
                    <Image style={{height: 85, resizeMode: 'contain'}} source={require('../resources/fb3.png')}></Image>
                </TouchableOpacity>   
                </View>
            </View>
        );
    }
}



const AppStackNavigator = createStackNavigator();


export default function App (){
    return(
        <NavigationContainer>
          <AppStackNavigator.Navigator>
            <AppStackNavigator.Screen name = "Login" component ={LoginPage} options={{headerShown:false}}/>
            <AppStackNavigator.Screen name = "Register" component ={RegisterPage} options={{headerShown:false}}/>
            <AppStackNavigator.Screen name = "Home" component ={HomePage} options={{headerShown:false}}/>
          </AppStackNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
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
})