//@flow

import React,{Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class PageFeedDetail extends Component<{}>{
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text>Page Feed Detail</Text>
      </View>
    )
  }
}
