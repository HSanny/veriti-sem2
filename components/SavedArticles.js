import React, { Component } from 'react';
import {
  Dimensions,
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
import Icon from 'react-native-vector-icons/AntDesign';
import  {Headerlogo} from "../App";



const Stack = createStackNavigator();

export function SavedArticlesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: theme.primaryColor },
        headerTintColor: theme.textLight,
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="SavedArticles"
        component={SavedArticles}
        options= {{ 
          headerTitle: () => <Headerlogo />,
          headerRight: () => (
            <TouchableOpacity style={ [{paddingHorizontal:15}]} onPress={() => navigation.navigate('Home')}>
          <Icon styles={{marginLeft:10}}   name="search1" size={30} color={theme.backgroundColor} />
        </TouchableOpacity>
          ), 
          }}/>
    </Stack.Navigator>
  )
}

export default class SavedArticles extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userSavedNews: Array.from(userCollection.getUser('user001').savedNews).map(newsId => {
        return newsCollection.get(newsId);
      })
    }
  }

  componentDidMount() {
    this.props.navigation.addListener(
      'focus',
      () => {
        this.setState((state) => {
          state.userSavedNews = Array.from(userCollection.getUser('user001').savedNews).map(newsId => {
            return newsCollection.get(newsId);
          })
          return state;
        });
      }
    );
  }

  render() {
    const { navigation } = this.props;
    const windowWidth = Dimensions.get('window').width;
    return (
        
      <ScrollView style={{backgroundColor: theme.backgroundColor}}>
        <View style={styles.container}>
        <Text style = {{padding:15,textAlign:'left',alignSelf:'stretch', fontSize:30, color:theme.primaryColor, fontWeight:"bold"}}>
          Your Saved Articles
        </Text>
          {this.state.userSavedNews.map((news, index) => {
            return (
              <TouchableOpacity 
                key={index} 
                style={{
                  width: windowWidth - 20,
                  flex: 1,
                  borderColor: theme.primaryColor,
                  backgroundColor: theme.textLight,
                  borderWidth: 2,
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom:10,
                  padding: 10
                }}
                onPress={() => navigation.navigate('NewsArticle', {
                  id: news.id,
                  img: {
                    uri: news.imageSrc
                  },
                  title: news.title,
                  source: news.source,
                  body: news.body
                })}
              >
                <Image
                  style={{
                    flex: 0,
                    height: 150
                  }}
                  source={{uri: news.imageSrc}}
                />
                <Text 
                  numberOfLines={2} 
                  style={{
                    flex: 1, 
                    color: theme.primaryColor,
                    marginTop: 5,
                    fontSize: 24,
                    fontWeight: 'bold'
                  }}
                >
                  {news.title}
                </Text>
                <Text 
                  style={{
                    flex: 1, 
                    color: theme.textGrey,
                    fontSize: 20
                  }}
                >
                  {news.source}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    )
  }
}