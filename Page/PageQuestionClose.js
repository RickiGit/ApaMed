//@flow

import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ListView,
} from 'react-native';

export default class PageQuestionClose extends Component<{}>{

  static navigationOptions = {
    headerTitle: 'Question',
    headerStyle: {
        backgroundColor: '#00ace6',
        borderBottomWidth: 0,
    },
    headerTitleStyle:{
        color: 'white',
    }
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <StatusBar
           barStyle="light-content"
        />
        {/* <Text>
          Page Question Close
        </Text> */}
        <ListView>
          
        </ListView>
      </View>
    )
  }
}
