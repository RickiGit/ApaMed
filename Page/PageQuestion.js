//@flow

import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class PageQuestion extends Component<{}>{

  static navigationOptions = {
    tabBarLabel: 'Question',
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>
          Page Question
        </Text>
      </View>
    )
  }
}