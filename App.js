/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {render} from "react-dom";
import Newscategories from './components/Newscategories'
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login} options={{ headerShown: false }
  }/>
        <Stack.Screen name ="SignIn" component = {SignIn}  options={{ headerShown: false }} />
        <Stack.Screen name = "homescreen" component = {homescreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const homescreen = () =>{
  let newsbox = 200
return(
  <ScrollView style={{backgroundColor: "#ff6622"}}>
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
)
}
const users = []
const Login = ({navigation}) => {
  const [userName, onChangeText] = React.useState('');
  const [password, onChangeText2] = React.useState('');
  return (
  <View style={styles.container}>
      <Image style={{aspectRatio:0.5,resizeMode: 'contain'}} source={require('./icon.png')}/> 
      
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"left"}
        style={styles.input}
        placeholder="User Name"
        onChangeText={text => {onChangeText(text)}}
        defaultValue={userName}
        />
      </View>
      
      <View style = {{padding:10,paddingBottom:30,}}>
        <TextInput secureTextEntry = {true}
        style={styles.input} 
        onChangeText={text => onChangeText2(text)}
        placeholder="Password" 
        defaultValue={password}
        />
      </View>
      
      <View style = {{alignItems: 'center',flexDirection:'row', paddingBottom:10}}>
        <View style = {{paddingRight:30,}}>  
          <TouchableOpacity style = {styles.intButton} onPress={() => navigation.navigate('homescreen')}>
            <Text style = {styles.buttonText}> Login </Text>
          </TouchableOpacity>
        </View>   
        <TouchableOpacity style = {styles.intButton} onPress={() => navigation.navigate('SignIn')} >
          <Text style = {styles.buttonText}> Sign up </Text>
        </TouchableOpacity>
      </View>
      <Text>or you can sign in with</Text>
      <View style ={{alignItems: 'center',flexDirection:'row', paddingBottom:10, justifyContent:"space-evenly"}}>
      <TouchableOpacity>   
        <Image style={{height: 100, resizeMode: 'contain'}} source={require('./g.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>   
        <Image style={{height: 85, resizeMode: 'contain'}} source={require('./fb3.png')}></Image>
      </TouchableOpacity>   
      </View>


</View>   
  );
}
const SignIn = ({navigation}) => {
  const [userName, onChangeText_username] = React.useState('');
  const [password, onChangeText_password] = React.useState('');
  const [confirm_password, onChangeText_confirm_password] = React.useState('');
  const [fname, onChangeText_fname] = React.useState('');
  const [lname, onChangeText_lname] = React.useState('');
  const [email, onChangeText_email] = React.useState('');
  const [confirm_email, onChangeText_confirm_email] = React.useState('');
    return (<View style={styles.container}>
      <Image style={{aspectRatio: 0.75, resizeMode: 'contain', position:"relative",}} source={require('./iconhalf.png')}/>
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
        style={styles.input2}
        onChangeText={text => {onChangeText_username(text)}}
        value={userName}
        />
      </View>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        secureTextEntry = {true}
        placeholder="Password" 
        style={styles.input2}
        onChangeText={text => {onChangeText_password(text)}}
        value={password}
        />
      </View>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        secureTextEntry = {true}
        placeholder="Confirm Password" 
        style={styles.input2}
        onChangeText={text => {onChangeText_confirm_password(text)}}
        value={confirm_password}
        />
      </View>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        placeholder="E-mail"
        style={styles.input2}
        onChangeText={text => {onChangeText_email(text)}}
        value={email}
        />
      </View>
      <View style = {{padding:10}}> 
        <TextInput textAlign = {"center"}
        placeholder="Confirm E-mail"
        style={styles.input2}
        onChangeText={text => {onChangeText_confirm_email(text)}}
        value={confirm_email}
        />
      </View>
      <TouchableOpacity style = {styles.intButtonWide} onPress={() => { 
        const user1 = new User(userName,password,fname,lname,email)
        users.push(user1)
        navigation.navigate('Login')}}>
          <Text style = {styles.buttonText}> Create Account </Text>
      </TouchableOpacity>
    </View>) 
}
// blue -> #87CEFA
// gray -> #E0E0E0
const styles = StyleSheet.create({
  container: {flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#EAE4D8'
},
  input: { height: 40, backgroundColor: "white",
    borderColor: 'white', 
    borderWidth: 2,
    borderRadius: 10,
    textAlign:"center",
    width: 230,
    height:50,
    fontSize:18,
  },
  input2: { height: 40, backgroundColor:"white",
    borderColor: 'white', 
    borderWidth: 2,
    borderRadius: 20,
    textAlign:"center",
    width: 300,
    height:50,
    fontSize:18,
  },
  inputSmall: { height: 40, 
    borderColor: 'white',
    backgroundColor:"white", 
    borderWidth: 2,
    borderRadius: 20,
    textAlign:"center",
    width: 140,
    height:50,
    fontSize:18,
  },
  intButton: {borderColor:"#35246A", 
    borderWidth: 2,
    borderRadius: 10,
    width:100,
    height:50, 
    alignItems:'center',
    padding:10,
    backgroundColor:'#35246A'},
  intButtonWide: {borderColor:"#35246A", 
    borderWidth: 2,
    borderRadius: 15,
    width:200,
    height:50, 
    alignItems:'center',
    padding:10,
    backgroundColor:'#35246A'},  
  buttonText: {textAlign:"center",
    color:"white",
    fontSize:18}   
} )
export default App;
