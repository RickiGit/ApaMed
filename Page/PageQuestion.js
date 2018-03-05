//@flow

import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import PageQuestionOpen from './PageQuestionOpen';
import PageQuestionClose from './PageQuestionClose';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export const TabsQuestion = TabNavigator({
  QuestionOpen: {
    screen: PageQuestionOpen,
    navigationOptions: {
      tabBarLabel: 'Open',
    },
  },
  QuestionClose: {
    screen: PageQuestionClose,
    navigationOptions: {
      tabBarLabel: 'Close',
    },
  },
},
{
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'Top',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      shifting: false,
      tabs: {
        QuestionOpen: {
          barBackgroundColor: '#00ace6',
        },
        QuestionClose: {
          barBackgroundColor: '#00ace6',
      }
    }
  }
}});

export default class PageQuestion extends Component<{}>{

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
      <TabsQuestion/>
    )
  }
}
