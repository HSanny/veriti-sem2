import {Component} from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import Video from 'react-native-video';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions

} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { SearchBar } from 'react-native-elements';

import Newscategories from './Newscategories';
import ForYou from './ForYou';
import InAus from './InAus';
import HappenGlobal from './HappenGlobal';
import {australiaNews} from '../resources/dummy-news/australia';
import {worldNews} from '../resources/dummy-news/world';
import {forYouNews} from '../resources/dummy-news/foryou';
import { theme } from '../resources/colour-scheme/theme';

export let newsCollection;
export const Stack = createStackNavigator();
var newsList = (australiaNews.map(function(obj) { return obj.title})).concat(worldNews.map(function(obj) { return obj.title; })).concat(forYouNews.map(function(obj) { return obj.title; }));
var newsList2 = australiaNews.concat(worldNews).concat(forYouNews);

function HappeningStack() {
  return (
    <Stack.Navigator
      initialRouteName="Happening"
      screenOptions={{
        headerStyle: {backgroundColor: theme.primaryColor},
        headerTintColor: theme.textLight,
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Happening News"
        component={HappeningScreen}
        options={{title: 'Happening News'}}
      />
    </Stack.Navigator>
  );
}

export default function HomePage() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: theme.primaryColor,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HappeningStack"
        component={HappeningStack}
        options={{
          tabBarLabel: 'Happening',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ForYou"
        component={ForYou}
        options={{
          tabBarLabel: 'ForYou',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const NewsRowSection = (props) => {
  const newsbox = 200;
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 22, padding: 30}}>
        {props.sectionTitle}
      </Text>
      <View style={{height: newsbox, flex: 1}}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{paddingLeft: 20, flexGrow: 1}}
          showsHorizontalScrollIndicator={false}>
          {props.newsArray && props.newsArray.map((news, index) => {
            // Store in a map for now to fetch later on?
            newsCollection.set(news.id, news);
            return (
              <Newscategories
                key={index}
                id={news.id}
                imagesource={{uri: news.imageSrc}}
                newsdescription={news.title}
                source={news.source}
                newsBody={news.body}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

NewsRowSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  newsArray: PropTypes.array.isRequired,
}

export const Home = ({navigation}) => {
  newsCollection = new Map();
  const [value, onChangeText] = React.useState('');
  const [search,displaySearch] = React.useState(false);
  function filterList(list){
    if(value) {
    return list.filter(listItem => (listItem.title).toLowerCase().includes(value.toLowerCase()) || (listItem.source).toLowerCase().includes(value.toLowerCase()) )
    }
    return [];
  }
  const windowWidth = Dimensions.get('window').width

  return (
    <ScrollView style={{backgroundColor: theme.backgroundColor}}>
    {search == true && (
      <SearchBar
        containerStyle={{backgroundColor:theme.primaryColor}}
        inputContainerStyle={{backgroundColor:"white"}}
        placeholder="Type Here..."
        onChangeText={text => onChangeText(text)}
        value={value}
      />)}

      <TouchableOpacity onPress= {() => {displaySearch(!search)}}>
        <Text>change</Text>
      </TouchableOpacity>
      <View style={{backgroundColor:"white"}}>
      {filterList(newsList2).map(
        (listItem, index) => (
            <Text key={index} style={styles.searchItem}>{listItem.title}</Text>

          ))}
          
      </View>     
      <NewsRowSection
        sectionTitle="Happening in Australia"
        newsArray={australiaNews}
      />
      <NewsRowSection
        sectionTitle="Happening Globally"
        newsArray={worldNews}
      />
      <NewsRowSection
        sectionTitle="For You"
        newsArray={forYouNews}
      />
    </ScrollView>
  );
};

export const HappeningScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            You are on Happening Screen
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('HappeningStack', {screen: 'HappeningInAus'})
            }>
            <Text>Go to Happening in Aus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HappeningGlobally')}>
            <Text>Go to Happen Globally</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          React Native Bottom Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    width: 230,
    fontSize: 18,
  },

  buttoncontainer: {
    borderColor: theme.primaryColor,
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.primaryColor,
  },
  buttontext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  searchItem: {
    color:"black",
    marginBottom:10,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
},
video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
},


});
