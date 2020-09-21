import React, { Component } from "react";
import { WebView } from 'react-native-webview';

import {
    View,
    Text,
    StyleSheet,
} from "react-native";


class Webviewer extends Component {
    render() {
      return <WebView source={{ uri: 'https://subscribe.smh.com.au/' }}/>;
    }
  }

  export default Webviewer;