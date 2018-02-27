//@flow

import React,{Component} from 'react';

import {
  View,
  Text,
  Button,
} from 'react-native';

export default class PageProfile extends Component<{}> {

  static navigationOptions = {
    headerTitle: 'Profile',
    tabBarLabel: 'Profile',
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>
          Page Profile
        </Text>
      </View>
    )
  }
}
