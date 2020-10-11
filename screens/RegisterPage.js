import React, {Component} from 'react';
import {Text, TextInput, View, TouchableOpacity,Image,StyleSheet} from 'react-native'
import {createStackNavigator, createAppContainer} from '@react-navigation/stack'


class User {
    constructor(userName,password,firstName,lastName,email) {
      this.userName = userName
      this.password = password
      this.firstName = firstName
      this.lastName = lastName
      this.email = email 
    }
    get user() {
      return this.userName
    }
    set user(name) {
      this.userName = name
    }
    get pw() {
      return this.pw
    }
    set pw(pass) {
      this.password = pass 
    }
    get fullName() {
      return this.firstName + " " +  this.lastName
    }
    get mail() {
      return this.email
    }
    set mail(email) {
      this.email = email
    }
  }
  
export const RegisterPage = ({navigation}) => {
    
        const [userName, onChangeText_username] = React.useState('');
        const [password, onChangeText_password] = React.useState('');
        const [confirm_password, onChangeText_confirm_password] = React.useState('');
        const [fname, onChangeText_fname] = React.useState('');
        const [lname, onChangeText_lname] = React.useState('');
        const [email, onChangeText_email] = React.useState('');
        const [confirm_email, onChangeText_confirm_email] = React.useState('');

        return(
            <View style={styles.container}>
      <Image style={{aspectRatio: 0.75, resizeMode: 'contain', position:"relative",}} source={require('../resources/iconhalf.png')}/>
      <View style = {{alignItems: 'center',flexDirection:'row'}}>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        placeholder="First Name"
        style={styles.inputSmall}
        onChangeText={text => {onChangeText_fname(text)}}
        value={fname}
        />
      </View>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        placeholder = "Last Name"
        style={styles.inputSmall}
        onChangeText={text => {onChangeText_lname(text)}}
        value={lname}
        />
      </View>
      </View>
      <View style = {{padding:10}}>
        <TextInput textAlign = {"center"}
        placeholder="User Name" 
        style={styles.input}
        onChangeText={text => {onChangeText_username(text)}}
        value={userName}
        />
      </View>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        secureTextEntry = {true}
        placeholder="Password" 
        style={styles.input}
        onChangeText={text => {onChangeText_password(text)}}
        value={password}
        />
      </View>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        secureTextEntry = {true}
        placeholder="Confirm Password" 
        style={styles.input}
        onChangeText={text => {onChangeText_confirm_password(text)}}
        value={confirm_password}
        />
      </View>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        placeholder="E-mail"
        style={styles.input}
        onChangeText={text => {onChangeText_email(text)}}
        value={email}
        />
      </View>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        placeholder="Confirm E-mail"
        style={styles.input}
        onChangeText={text => {onChangeText_confirm_email(text)}}
        value={confirm_email}
        />
      </View>
      <TouchableOpacity style = {styles.buttoncontainer} onPress={() => { 
        const user1 = new User(userName,password,fname,lname,email)
        users.push(user1)
        navigation.navigate('Login')}}>
          <Text style = {styles.buttonText}> Create Account </Text>
      </TouchableOpacity>
    </View>) 
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
        backgroundColor:"white",
        borderColor: 'white', 
        borderWidth: 2,
        borderRadius: 20,
        textAlign:"center",
        width: 300,
        fontSize:18,
    },

    inputSmall: { height: 40, 
        borderColor: 'white',
        backgroundColor:"white", 
        borderWidth: 2,
        borderRadius: 20,
        textAlign:"center",
        width: 140,
        fontSize:18,
      },
    
    
    buttoncontainer:{
        borderColor:"#35246A", 
        borderWidth: 2,
        borderRadius: 15,
        width:200,
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