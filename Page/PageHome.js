//@flow

import React,{Component} from 'react';
import Swiper from 'react-native-swiper';
import {TabNavigator,StackNavigator} from 'react-navigation';

import PageDoctor from './PageDoctor';
import PageProfile from './PageProfile';
import PageFeed from './PageFeed';
import PageFeedDetail from './PageFeedDetail';
import {
  Platform,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar
} from 'react-native';
//import Carousel from 'react-native-carousel-view';

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
  lazy:false,
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
    header: null,
    headerStyle: {
            backgroundColor: '#00ace6'
          },
    headerTitleStyle: { color: 'white' },
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <StatusBar
         backgroundColor="#007acc"
         barStyle="light-content"
       />
        <View style={styles.header}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
            <View style={styles.slide}>
              <ImageBackground style={styles.imageHeader} source={require('../Assets/images/background.jpeg')}>
                <Text style={styles.titleHeader}>Lorem Ipsum is simply dummy text of the printing</Text>
                <View style={styles.containerComment}>
                  <Image style={styles.iconImage} source={require('../Assets/images/comment.png')}/>
                  <Text style={styles.titleComment}>30 Comment</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground style={styles.imageHeader} source={{uri: 'https://wallpaperscraft.com/image/minimalism_sky_clouds_sun_mountains_lake_landscape_95458_1920x1080.jpg'}}>
                <Text style={styles.titleHeader}>Lorem Ipsum is simply dummy text of the printing</Text>
                <View style={styles.containerComment}>
                  <Image style={styles.iconImage} source={require('../Assets/images/comment.png')}/>
                  <Text style={styles.titleComment}>30 Comment</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground style={styles.imageHeader} source={{uri: 'https://cdn57.androidauthority.net/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android.jpg'}}>
                <Text style={styles.titleHeader}>Lorem Ipsum is simply dummy text of the printing</Text>
                <View style={styles.containerComment}>
                  <Image style={styles.iconImage} source={require('../Assets/images/comment.png')}/>
                  <Text style={styles.titleComment}>30 Comment</Text>
                </View>
              </ImageBackground>
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

  imageHeader:{
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },

  titleHeader:{
    fontSize: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    color: '#FFFFFF',
    shadowRadius: 5,
    shadowOpacity: 1.0,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    alignSelf: 'flex-start'
  },

  header: {
    flex: 2,
    backgroundColor: "#dddddd"
  },

  content: {
    flex: 3,
    backgroundColor: "#ffffff"
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  iconImage:{
      width: 20,
      height: 20,
      marginRight: 10
  },

  titleComment:{
    color: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 3
    },
    color: '#FFFFFF',
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },

  containerComment:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 30,
  }
});
