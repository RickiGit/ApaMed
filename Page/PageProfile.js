//@flow

import React,{Component} from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

export default class PageProfile extends Component<{}> {

  static navigationOptions = {
    headerTitle: 'Profile',
    tabBarLabel: 'Profile',
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text>
          Page Profile
        </Text>
      </View>
    )
  }
}

 const styles = StyleSheet.create({
   container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },

 });
