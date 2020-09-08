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
            <View style = {{height: newsbox, width: newsbox, marginLeft: 10, borderColor: '#F6EEF0', borderWidth:2, borderRadius: 10}}>
            <View style = {{flex:3}}>
              <Image
              style={{flex:1,resizeMode:'center'}}
              source={this.props.imagesource}
            />
            </View>
            <View style = {{flex:2}}>
              <Text style= {{paddingHorizontal:10}}>
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