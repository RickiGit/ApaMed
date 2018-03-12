//@flow

import React,{Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class PageFeedDetail extends Component<{}>{
  render(){
    const { navigate } = this.props.navigation;
    const navParams = this.props.navigation.state.params;
    return(
      <View>
        <Text>{navParams}</Text>
      </View>
    )
  }
}
