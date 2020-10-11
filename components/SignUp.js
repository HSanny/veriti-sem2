
import { Component } from 'react';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from "./styles";
import { User, addNewUser } from "../components/Users";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password_confirm: "",
      fname: "",
      lname: "",
      email: "",
      email_confirm: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{aspectRatio: 0.75, resizeMode: 'contain', position:"relative",}} source={require('../resources/iconhalf.png')}/>
        <View style = {{alignItems: 'center',flexDirection:'row'}}>
        <View style = {{padding:10}}> 
          <TextInput textAlign = {"center"}
          placeholder="First Name"
          style={styles.inputSmall}
          onChangeText={(text) => {this.setState({fname: text});}}
          value={this.state.fname}
          />
        </View>
        <View style = {{padding:10}}> 
          <TextInput textAlign = {"center"}
          placeholder = "Last Name"
          style={styles.inputSmall}
          onChangeText={(text) => {this.setState({lname: text});}}
          value={this.state.lname}
          />
        </View>
        </View>
        <View style = {{padding:10}}>
          <TextInput textAlign = {"center"}
          placeholder="User Name" 
          style={styles.input2}
          onChangeText={(text) => {this.setState({username: text});}}
          value={this.state.userName}
          />
        </View>
        <View style = {{padding:10}}> 
          <TextInput textAlign = {"center"}
          secureTextEntry = {true}
          placeholder="Password" 
          style={styles.input2}
          onChangeText={(text) => {this.setState({password: text});}}
          value={this.state.password}
          />
        </View>
        <View style = {{padding:10}}> 
          <TextInput textAlign = {"center"}
          secureTextEntry = {true}
          placeholder="Confirm Password" 
          style={styles.input2}
          onChangeText={(text) => {this.setState({password_confirm: text});}}
          value={this.state.password_confirm}
          />
        </View>
        <View style = {{padding:10}}> 
          <TextInput textAlign = {"center"}
          placeholder="E-mail"
          style={styles.input2}
          onChangeText={(text) => {this.setState({email: text});}}
          value={this.state.email}
          />
        </View>
        <View style = {{padding:10}}> 
          <TextInput textAlign = {"center"}
          placeholder="Confirm E-mail"
          style={styles.input2}
          onChangeText={(text) => {this.setState({email_confirm: text});}}
          value={this.state.email_confirm}
          />
        </View>
        <TouchableOpacity style = {styles.intButtonWide} onPress={() => { 
          addNewUser(new User(userName,password,fname,lname,email));
          navigation.navigate('Login')}}>
            <Text style = {styles.buttonText}> Create Account </Text>
        </TouchableOpacity>
      </View>
    ); 
  }
}