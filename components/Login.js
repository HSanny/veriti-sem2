import { Component } from 'react';
import { styles } from './styles';
import React from 'react';
import {
 View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.usernameChanged = this.usernameChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
  }

  usernameChanged(username) {
    this.setState((state) => {
      state.username = username;
      return state;
    });
  }

  passwordChanged(password) {
    this.setState((state) => {
      state.password = password;
      return state;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{aspectRatio:0.5,resizeMode: 'contain'}} source={require('../icon.png')}/> 
        
        <View style = {{padding:10}}> 
          <TextInput textAlign = {"left"}
          style={styles.input}
          placeholder="User Name"
          onChangeText={text => {this.usernameChanged(text)}}
          defaultValue={this.state.userrname}
          />
        </View>
        
        <View style = {{padding:10,paddingBottom:30,}}>
          <TextInput secureTextEntry = {true}
          style={styles.input} 
          onChangeText={text => this.passwordChanged(text)}
          placeholder="Password" 
          defaultValue={this.state.password}
          />
        </View>
        
        <View style = {{alignItems: 'center',flexDirection:'row', paddingBottom:10}}>
          <View style = {{paddingRight:30,}}>  
            <TouchableOpacity style = {styles.intButton} onPress={() => this.props.navigation.navigate('homescreen')}>
              <Text style = {styles.buttonText}> Login </Text>
            </TouchableOpacity>
          </View>   
          <TouchableOpacity style = {styles.intButton} onPress={() => this.props.navigation.navigate('SignIn')} >
            <Text style = {styles.buttonText}> Sign up </Text>
          </TouchableOpacity>
        </View>
        <Text>or you can sign in with</Text>
        <View style ={{alignItems: 'center',flexDirection:'row', paddingBottom:10, justifyContent:"space-evenly"}}>
        <TouchableOpacity>   
          <Image style={{height: 100, resizeMode: 'contain'}} source={require('../g.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>   
          <Image style={{height: 85, resizeMode: 'contain'}} source={require('../fb3.png')}></Image>
        </TouchableOpacity>   
        </View>
    </View>   
    );
  }
}

export default Login;