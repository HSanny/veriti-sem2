import React, {Component} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Newscategories = (props) => {
  let newsbox = 200;
  
  // This is a component rather than a screen, so we need to use
  // a hook to navigate to a different screen
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewsArticle', {
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
          height: newsbox,
          width: newsbox,
          borderColor: '#35246A',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 5,
          backgroundColor: '#35246A',
        }}
      >
        <View style={{flex: 2}}>
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
        <View style={{flex: 1}}>
          <Text numberOfLines={3} style={{flex: 1, paddingHorizontal: 10, color: 'white'}}>
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
