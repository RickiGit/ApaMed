/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {TabNavigator,StackNavigator,TabBarBottom} from 'react-navigation';
//import {NavigationComponent} from 'react-native-material-bottom-navigation';
import PageHome from './PageHome';
import PageFeedDetail from './PageFeedDetail';
import PageDoctor from './PageDoctor';
import PageProfile from './PageProfile';
import PageQuestionOpen from './PageQuestionOpen';
import PageQuestionClose from './PageQuestionClose';
import PageQuestionDetail from './PageQuestionDetail';
import PageRegister from './PageRegister';
import PageLogin from './PageLogin';
import PageHospitalList from './PageHospitalList';
import PageMapsHospital from './PageMapsHospital';

import {Image,Platform} from 'react-native';
import React from 'react';

export const imageHome = require('../Assets/images/home.png');
export const imageQuestion = require('../Assets/images/questions.png');
export const imageDoctor = require('../Assets/images/doctor.png');
export const imageProfile = require('../Assets/images/profile.png');
export const imageHospital = require('../Assets/images/hospital.png');


const DoctorScreen = StackNavigator({
  Doctor:{screen: PageDoctor},
});

const HospitalScreen = StackNavigator({
  Hospital:{screen: PageHospitalList},
  MapsHospital:{screen: PageMapsHospital},
});

const LoginScreen = StackNavigator({
  Login:{screen: PageLogin},
  Register:{screen: PageRegister},
});

const ProfileScreen = StackNavigator({
  Profile:{screen: PageProfile},
});

const HomeScreen = StackNavigator({
  MainFeed:{screen: PageHome},
  DetailFeed:{screen: PageFeedDetail},
});

const QuestionScreen = StackNavigator({
  QuestionList:{screen: TabNavigator({
    QuestionOpen:{
      screen:PageQuestionOpen,
      navigationOptions: {
        tabBarLabel: 'Open',
      },
    },
    QuestionClose:{
      screen:PageQuestionClose,
      navigationOptions: {
        tabBarLabel: 'Close',
      },
    },
  },
  {
      tabBarPosition: 'top',
      tabBarOptions:{
        style:{
          backgroundColor: '#00ace6',
          borderTopColor: 'transparent',
        },
        labelStyle:{
          fontSize: 16,
          color: 'white',
          ...Platform.select({
            ios:{
              paddingBottom:10,
            },
          }),
        }
      }
    }
  )
},
  QuestionDetail:{screen: PageQuestionDetail}
});
let currentIndex;

const MainScreen = TabNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions: {
        showLabel: false,
        tabBarIcon: <Image source={imageHome} style={{width: 20, height: 20}}/>,
        showIcon: true,
        tabBarLabel:'Home',
    }
  },
  Question:{
    screen:QuestionScreen,
    navigationOptions: {
      tabBarLabel: 'Question',
      tabBarOptions:{
        bottomNavigationOptions:{
          shifting: false,
        }
      },
      showLabel: false,
      tabBarIcon: <Image source={imageQuestion} style={{width: 20, height: 20}}/>,
      showIcon: true
    },
  },
  Doctor:{
    screen:DoctorScreen,
    navigationOptions: {
        showLabel: false,
        tabBarIcon: <Image source={imageDoctor} style={{width: 20, height: 20}}/>,
        showIcon: true
    }
  },
  Hospital:{
    screen:HospitalScreen,
    navigationOptions: {
        showLabel: false,
        tabBarIcon: <Image source={imageHospital} style={{width: 20, height: 20}}/>,
        showIcon: true
    }
  },
  Profile:{
    screen:ProfileScreen,
    navigationOptions: {
        showLabel: false,
        tabBarIcon: <Image source={imageProfile} style={{width: 20, height: 20}}/>,
        showIcon: true
    }
  },
},
{
  lazy:false,
  swipeEnabled:false,
  animationEnabled:false,
  tabBarComponent: ({ jumpToIndex, ...props }) => (
      <TabBarBottom
        {...props}
        jumpToIndex={index => {
          if (currentIndex === index && index === 0) {
            let resetTabAction = NavigationActions.navigate({
              routeName: "MainTab",
              action: NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Home" })],
              }),
            });
            props.navigation.dispatch(resetTabAction);
          } else {
            currentIndex = index;
            jumpToIndex(index);
          }
        }}
      />
    ),
  tabBarPosition: 'bottom',
  tabBarOptions:{
    bottomNavigationOptions:{
      shifting: false,
      }
    }
  }
);

export default MainScreen;
