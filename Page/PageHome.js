//@flow

import React,{Component} from 'react';
import {TabNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';

import PageDoctor from './PageDoctor';
import PageProfile from './PageProfile';
import PageFeed from './PageFeed';
import {
  Platform,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';


const CenterTabs = TabNavigator({
  All:{screen:PageFeed},
  Featured:{screen:PageFeed},
  Popular:{screen:PageFeed},
  MyFavorites:{
    screen:PageFeed,
    navigationOptions:{
      tabBarLabel:'My Favorites',
    }
  },
},
{
  tabBarPosition:'top',
  scrollEnabled:true,
  tabBarOptions:{
    showIcon:false,
    labelStyle:{
    },
  },
});



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
          <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <TouchableOpacity onPress={() => navigate('DetailFeed')}><Text style={styles.text}>Hello Swiper</Text></TouchableOpacity>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
        </View>
        <View style={styles.content}>
          <CenterTabs navigation={this.props.navigation}/>
        </View>
      </View>
    )
  }
}

PageHome.router = CenterTabs.router

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
    backgroundColor: "#ffffff"
  },

  titleHeader:{
    color: '#FFFFFF',
    fontSize: 18,
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
