import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { profile } from '../App';
import {createStackNavigator} from '@react-navigation/stack';
import { theme } from '../resources/colour-scheme/theme';
import { userCollection } from './Login';
import { styles } from './styles';
import { NewsRowSection, newsCollection } from './Home';
import {australiaNews} from '../resources/dummy-news/australia';
import {worldNews} from '../resources/dummy-news/world';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import {forYouNews} from '../resources/dummy-news/foryou';
import { color } from 'react-native-reanimated';


    export const CategoryExpanded = () => {
        const windowWidth = Dimensions.get('window').width;
        const navigation = useNavigation();
        return (
          
          <View>
           
          <Text style = {{padding:20,textAlign:'left',alignSelf:'stretch', fontSize:30, color:theme.primaryColor, fontWeight:"bold"}}>
            Happening in Australia
          </Text>
            <FlatList 
            
            contentContainerStyle={{padding:20,flexGrow: 1, paddingTop:0}}
            data={worldNews}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => {
                console.log(item.imageSrc + "Hi")

                navigation.navigate('NewsArticle',{
                  id: item.id,
                  img: {
                    uri: item.imageSrc
                  },
                  title: item.title,
                  source: item.source,
                  body: item.body
                })
              }}
            >
              
              <View
                style={{
                  flex: 1,
                  height: 300,
                  width: windowWidth-50,
                  borderWidth:2,
                  borderColor: theme.primaryColor,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 15,
                  backgroundColor: theme.backgroundColor
                }}
              >
                <View style={{flex: 4}}>
                  <Image
                    style={{
                      width: windowWidth-70,
                      flex: 1,
                      borderRadius: 10,
                      marginTop: 5,
                    }}
                    source={{
                      uri: item.imageSrc
                    }}
                  />
                </View>
                <View style={{borderBottomRightRadius:10, borderBottomLeftRadius:10, width:windowWidth-50, marginTop: -10,flex: 2, backgroundColor: theme.primaryColor, borderTopRightRadius:20}}>
                  <Text numberOfLines={4} style={{flex: 1, paddingTop:5, paddingHorizontal: 10, color: "white", fontSize:16}}>
                    {item.title}
                  </Text>
                  <Text 
                  style={{
                    flex: 1, paddingTop:5, paddingHorizontal: 10, color: theme.textcream,
                    fontSize: 20
                  }}
                >
                  {item.source}
                </Text>
                </View>
              </View>
              </TouchableOpacity>
            )}
            />

          </View>
        );
      }

      export default CategoryExpanded;