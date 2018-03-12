//@flow

import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class PageDoctor extends Component<{}>{

  static navigationOptions = {
    headerTitle: 'Doctor',
    tabBarLabel: 'Doctor',
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>
          Page Doctor
        </Text>
      </View>
    )
  }
}
