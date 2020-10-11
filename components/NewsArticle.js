import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../resources/colour-scheme/theme';
import {styles} from './styles';
import {userCollection} from './Login';

export default class NewsArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Use dummy user for now
      isSaved: userCollection
        .getUser('user001')
        .savedNews.has(this.props.route.params.id),
    };
  }

  toggleIsSaved() {
    const newsId = this.props.route.params.id;
    if (this.state.isSaved) {
      userCollection.getUser('user001').removeSavedNews(newsId);
    } else {
      userCollection.getUser('user001').addSavedNews(newsId);
    }
    this.setState((state) => {
      state.isSaved = !state.isSaved;
      return state;
    });
  }

  render() {
    const windowWidth = Dimensions.get('window').width;
    const {navigation} = this.props;
    const newsParams = this.props.route.params;
    const paragraphs =
      newsParams.body !== undefined && newsParams.body.split('\n');

    return (
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              flex: 1,
              alignItems: 'flex-start',
            },
          ]}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="close" size={50} color={theme.primaryColor} />
          </TouchableOpacity>
          <View>
            <Image
              style={{
                height: 200,
                width: windowWidth,
                flex: 0,
                marginTop: 5,
              }}
              source={newsParams.img}
            />
            <Icon
              name="volume-mute"
              size={25}
              color="black"
              style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 15,
            }}>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 5,
                color: theme.primaryColor,
                fontSize: 32,
                fontWeight: 'bold',
              }}>
              {newsParams.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: theme.textGrey,
                  fontSize: 28,
                  marginBottom: 10,
                }}>
                {newsParams.source}
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  right: 10,
                  backgroundColor: this.state.isSaved
                    ? theme.backgroundColor
                    : theme.primaryColor,
                  borderColor: this.state.isSaved
                    ? theme.primaryColor
                    : theme.backgroundColor,
                  borderWidth: 2,
                  borderRadius: 10,
                  padding: 10,
                }}
                onPress={() => this.toggleIsSaved(newsParams.id)}>
                <Icon
                  name={this.state.isSaved ? 'bookmark-minus' : 'bookmark-plus'}
                  size={25}
                  color={
                    this.state.isSaved ? theme.primaryColor : theme.textLight
                  }
                  style={{marginRight: 10}}
                />
                <Text
                  style={{
                    color: this.state.isSaved
                      ? theme.primaryColor
                      : theme.textLight,
                    fontSize: 18,
                  }}>
                  {this.state.isSaved ? 'Unsave' : 'Save'}
                </Text>
              </TouchableOpacity>
            </View>
            {paragraphs &&
              paragraphs.map((paragraph, id) => {
                return <Paragraph key={id}>{paragraph}</Paragraph>;
              })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const Paragraph = (props) => (
  <Text
    style={{
      color: theme.textDark,
      fontSize: 18,
      marginVertical: 10,
    }}>
    {props.children}
  </Text>
);
