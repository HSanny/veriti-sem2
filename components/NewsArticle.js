import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import ProgressBar from "react-native-progress/Bar"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../resources/colour-scheme/theme';
import {styles} from './styles';
import {userCollection} from './Login';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import { ThemeConsumer } from 'react-native-elements';

export default class NewsArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Use dummy user for now
      isSaved: userCollection
        .getUser('user001')
        .savedNews.has(this.props.route.params.id),
        paused: false, 
        progress:0,
        duration: 0,
        fullscreen: false
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
  handleLoad = (meta) => {
    this.setState({
      duration: meta.duration
    })
  }
  handleMainButtonTouch = () => {
    console.log(this.state.progress)
    if (this.state.progress >= 0.99) {
      console.log("got here")
      this.player.seek(0)
    }
    this.setState(state => {
      return {
        paused: !state.paused
      }
    })
  }
  handleProgressPress = (e) => {
    
    const position = e.nativeEvent.locationX;
    const progress = (position/ 250) * this.state.duration;
    this.player.seek(progress);
    this.setState({paused: false})
  }
  handleProgress= (progress) => {
    this.setState({progress:progress.currentTime / this.state.duration})
  }
  handleEnd = () => {
    this.setState({paused: true})
  }
  handleFullscreen = state => {
    return {
      fullscreen: !state.fullscreen
    }
  }


  render() {
    const windowWidth = Dimensions.get('window').width;
    const {navigation} = this.props;
    const newsParams = this.props.route.params;
    const paragraphs =
    newsParams.body !== undefined && newsParams.body.split('\n');
    secondsToMinutes = (seconds) => {
      if (seconds > 60) {
        return seconds/60 + " : " + seconds % 60
      }
      if (seconds < 10) {
        return "00 : 0" + seconds
      }
     return "00 : " + seconds 
    }

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
          <Video
          source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
          resizeMode="contain"
          paused={this.state.paused}
          onLoad={this.handleLoad}
          onProgress={this.handleProgress}
          onEnd={this.handleEnd}
          ref={ref => this.player = ref}
          style={{ width: windowWidth, height: 200 }}
          fullscreen={this.state.fullscreen}
          />
          <View style={styles.controls}>
            <TouchableWithoutFeedback onPress= {this.handleMainButtonTouch}>
              <Icon name={!this.state.paused ? "pause" : "play"} size={30} color={theme.primaryColor}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.handleProgressPress}>
              <View>
                <ProgressBar
                  progress={this.state.progress}
                  color={theme.primaryColor}
                  unfilled="rgba(255,255,255,.5)"
                  width={250}
                  height={10}
                  />  
              </View>
            </TouchableWithoutFeedback>
            <Text style={styles.duration}>
                {secondsToMinutes(Math.floor(this.state.progress * this.state.duration))}

            </Text>
            <TouchableOpacity onPress= {this.handleFullscreen}>
              <Icon name="fullscreen" size={30} color={theme.primaryColor} />
            </TouchableOpacity>
          </View>
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
