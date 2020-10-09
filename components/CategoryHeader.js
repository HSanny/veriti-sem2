import React, { Component } from "react";
import { render } from "react-dom";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";

const CategoryHeader = ({navigation}) =>{

    return(
    <View style={{flexDirection:"row"}}>
      <Text style={{fontWeight :'bold', fontSize: 22, padding: 20}}>
        Happening in Australia
      </Text>
      <View style = {{width:150, paddingTop:20, paddingLeft:40}}>
        <Button title="View More" onPress={() => navigation.navigate('SignIn')}/>
      </View>
      </View>
      );
    }

export default CategoryHeader;