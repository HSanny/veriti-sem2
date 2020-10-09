import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Newscategories extends Component {
    render() {
        let newsbox = 150

        return (
            <View style = {{flex:1,height: newsbox+50, width: newsbox, borderColor: '#999999', borderWidth:1, borderRadius: 10, alignItems:"center", justifyContent:"center", backgroundColor: "#ff66"}}>
            <View style = {{margin:5,flex:2}}>
              <Image
              style={{height: newsbox-10, width: newsbox-10, flex:1, borderRadius:10}}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});