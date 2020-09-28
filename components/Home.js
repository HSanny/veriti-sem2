import { Component } from 'react';
import React from 'react';
import Newscategories from "./Newscategories";
import {
  ScrollView,
  View,
  Text,
} from 'react-native';


const newsbox = 200;
export default class Homescreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    );
  }
}
