import React, { Component } from "react";
import { render } from "react-dom";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";


const secondarycolor = "#4C26B2"
const CategoryHeader = (props) =>{    

    return(
    <View style={{flexDirection:"row", justifyContent: "space-between"}}>
      <Text style={{fontWeight :'bold', fontSize: 22, padding: 20}}>
        {props.categorytopic}
        
      </Text>
      <View style = {{ width:150, padding:20}}>
        <Button color = {secondarycolor}  title="View More" onPress={null}/>
      </View>
      </View>
      );
    }

export default CategoryHeader;