import React from 'react';
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
import { theme } from '../resources/colour-scheme/theme';
import {styles} from './styles';

export const NewsArticle = ({route, navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const newsParams = route.params;
  const paragraphs =
    newsParams.body !== undefined && newsParams.body.split('\n');
  return (
    <ScrollView>
      <View
        style={[styles.container, {
          flex: 1,
          alignItems: 'flex-start',
        }]}>
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
          <Text
            style={{
              color: theme.textGrey,
              fontSize: 28,
              marginBottom: 10,
            }}>
            {newsParams.source}
          </Text>
          {paragraphs &&
            paragraphs.map((paragraph, id) => {
              return <Paragraph key={id}>{paragraph}</Paragraph>;
            })}
        </View>
      </View>
    </ScrollView>
  );
};

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