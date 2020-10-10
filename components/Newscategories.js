import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const primarycolor = "#ffffff"
const secondarycolor = "#4C26B2"
class Newscategories extends Component {
    render() {
        let newsbox = 150

        return (
            <View style = {{flex:1, marginRight:10, height: newsbox+50, width: newsbox, borderColor:secondarycolor, borderWidth:2, borderRadius: 10, alignItems:"center", justifyContent:"center", backgroundColor: "#d8d0ee" }}>
            <View style = {{margin:5,flex:3}}>
              <Image
              style={{height: newsbox-50, width: newsbox-10, flex:1, borderRadius:10}}
              source={this.props.imagesource}
            />
            </View>
            <View style = {{borderTopRightRadius:10, flex:2, backgroundColor: "#251551"}}>
              <Text style= {{color:primarycolor, flex:1,paddingHorizontal:5}}>
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