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
            <View style = {{flex:1,height: newsbox, width: newsbox, borderColor: '#35246A',  borderRadius: 10, alignItems:"center", justifyContent:"center", marginRight:5, backgroundColor:"#35246A"}}>
            <View style = {{flex:2}}>
              <Image
              style={{height: newsbox-10, width: newsbox-10, flex:1,borderRadius:10,marginTop:5}}
              source={this.props.imagesource}
            />
            </View>
            <View style = {{flex:1}}>
              <Text style= {{flex:1,paddingHorizontal:10, color:"white"}}>
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
