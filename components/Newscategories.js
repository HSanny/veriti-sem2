import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Newscategories extends Component {
    render() {
        let newsbox = 200

        return (
            <View style = {{flex:1,height: newsbox, width: newsbox, borderColor: '#999999', borderWidth:2, borderRadius: 10, alignItems:"center", justifyContent:"center"}}>
            <View style = {{flex:2}}>
              <Image
              style={{height: newsbox-10, width: newsbox-10, flex:1, borderRadius:30}}
              source={this.props.imagesource}
            />
            </View>
            <View style = {{flex:1}}>
              <Text style= {{flex:1,paddingHorizontal:10}}>
              {this.props.newsdescription}
              </Text>
            </View>

          </View>
        );
    }
}
export default Newscategories;

