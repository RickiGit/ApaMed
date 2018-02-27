//@flow

import React,{Component} from 'react';
import {TabNavigator,StackNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';

import PageDoctor from './PageDoctor';
import PageProfile from './PageProfile';

import {
  Platform,
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

const TabsMenu = TabNavigator({
  All:{screen: StackNavigator({
    screen:PageDoctor,
  })},

  Featured:{screen: StackNavigator({
    screen:PageProfile
  })},

  Popular:{screen: StackNavigator({
    screen:PageDoctor
  })},

  MyFavorites:{screen: StackNavigator({
    screen:PageProfile
  })},
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: '#ffffff',

      showIcon: false,
      rippleColor: 'grey',
      shifting: false,
      tabs: {
        All: {
          barBackgroundColor: '#00ace6',
        },
        Featured: {
          barBackgroundColor: '#00ace6'
        },
        Popular: {
          barBackgroundColor: '#00ace6'
        },
        MyFavorites: {
          barBackgroundColor: '#00ace6'
        },
      }
    }
  }
}

);

export default class PageHome extends Component<{}> {

  static navigationOptions = {
    headerTitle:'Home',
    tabBarLabel: 'Home',
    headerStyle: {
            backgroundColor: '#00ace6'
          },
    headerTitleStyle: { color: 'white' },
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Ini namanya nyoba dulu kali aja cocok</Text>
          <TabsMenu/>
        </View>
        <View style={styles.content}></View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2041',
  },

  header: {
    flex: 1,
    backgroundColor: "#ffc857"
  },

  content: {
    flex: 1,
    backgroundColor: "#4b3f72"
  },

  titleHeader:{
    color: '#FFFFFF',
    fontSize: 18,
  }
});
