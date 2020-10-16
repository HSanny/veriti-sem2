import {Component} from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import Video from 'react-native-video';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  Image

} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ListItem, SearchBar } from 'react-native-elements';

import Newscategories from './Newscategories';
import {australiaNews} from '../resources/dummy-news/australia';
import {worldNews} from '../resources/dummy-news/world';
import {forYouNews} from '../resources/dummy-news/foryou';
import { theme } from '../resources/colour-scheme/theme';

export let newsCollection;
export const Stack = createStackNavigator();
var newsList2 = australiaNews.concat(worldNews).concat(forYouNews);


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
          <TouchableOpacity key={index}  style={{flexDirection:"row",textAlign:"center",margin:10,borderWidth:2,borderColor:theme.primaryColor,borderRadius:10}}
          onPress={() => {
              navigation.navigate('NewsArticle',{
              id: listItem.id,
              img: {
                uri: listItem.imageSrc
              },
              title: listItem.title,
              source: listItem.source,
              body: listItem.body
            })
            onChangeText("")
          }}>
            <Image source={{uri: listItem.imageSrc}} style={{height:100,width:100,marginRight:10}}></Image>
            <Text style={styles.searchItem}>{listItem.title}</Text>
          </TouchableOpacity>
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
    flex:1,
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
