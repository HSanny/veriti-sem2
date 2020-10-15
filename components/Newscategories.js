import React, {Component} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../resources/colour-scheme/theme';

const Newscategories = (props) => {
  let newsbox = 150;
  
  // For some reasons doesn't work using this.props.navigation
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewsArticle', {
          id: props.id,
          img: props.imagesource,
          title: props.newsdescription,
          source: props.source,
          body: props.newsBody
        });
      }}
    >
      <View
        style={{
          flex: 1,
          height: newsbox+50,
          width: newsbox,
          borderWidth:2,
          borderColor: theme.primaryColor,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
          backgroundColor: theme.backgroundColor,
        }}
      >
        <View style={{flex: 3}}>
          <Image
            style={{
              height: newsbox - 10,
              width: newsbox - 10,
              flex: 1,
              borderRadius: 10,
              marginTop: 5,
            }}
            source={props.imagesource}
          />
        </View>
        <View style={{marginTop: -10,flex: 2, backgroundColor: theme.primaryColor, borderTopRightRadius:10}}>
          <Text numberOfLines={4} style={{flex: 1, paddingTop:5, paddingHorizontal: 10, color: "white"}}>
            {props.newsdescription}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Newscategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
