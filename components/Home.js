import {Component} from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Newscategories from './Newscategories';
import {australiaNews} from '../resources/dummy-news/australia';
import {worldNews} from '../resources/dummy-news/world';
import {forYouNews} from '../resources/dummy-news/foryou';
import { theme } from '../resources/colour-scheme/theme';

export let newsCollection;
export const Stack = createStackNavigator();


export const NewsRowSection = (props) => {
  const newsbox = 150;
  const navigation = useNavigation();

  return (
    <View>
      <View  style={{flexDirection:"row", justifyContent: "space-between"}}>
      <Text style={{fontWeight: 'bold', fontSize: 22, padding: 20}}>
        {props.sectionTitle}
      </Text>
      <View style = {{padding:20, width:150}}>
        <Button color = {theme.primaryColor}  title="View More" onPress={() => navigation.navigate('CategoryExpanded')}/>
      </View>
      </View>
      <View style={{height: newsbox+50, flex: 1}}>
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
  return (
    <ScrollView style={{backgroundColor: theme.backgroundColor}}>
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
});
