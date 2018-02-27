//@flow

import React,{Component} from 'react';

import {
  View,
  Text,
  Button,
} from 'react-native';

export default class PageHome extends Component<{}> {

  static navigationOptions = {
    headerTitle:'Home',
    tabBarLabel: 'Home',

  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>
          Page Home
        </Text>
      </View>
    )
  }
}