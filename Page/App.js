/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {TabNavigator,StackNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import PageHome from './PageHome';
import PageFeedDetail from './PageFeedDetail';
import PageDoctor from './PageDoctor';
import PageProfile from './PageProfile';
import PageQuestionOpen from './PageQuestionOpen';
import PageQuestionClose from './PageQuestionClose';
import PageQuestionDetail from './PageQuestionDetail';

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
        },
        labelStyle:{
          fontSize: 16,
          color: 'white',
        }
      }
    }
  )
},
  QuestionDetail:{screen: PageQuestionDetail}
});

const MainScreen = TabNavigator({
  Home:{screen:PageHome},
  Question:{
    screen:QuestionScreen,
    navigationOptions: {
      tabBarLabel: 'Question',
      tabBarOptions:{
        bottomNavigationOptions:{
          shifting: false,
        }
      }
    },
  },
  Doctor:{screen:PageDoctor},
  Profile:{screen:PageProfile},
},
{
  lazy:false,
  swipeEnabled:false,
  animationEnabled:false,
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions:{
    bottomNavigationOptions:{
      shifting: false,
      }
    }
  }
);
// const MainScreen = TabNavigator({
//   Home: {screen: StackNavigator({
//     screen:PageHome
//   })},
//   Question:{screen: StackNavigator({
//     QuestionChild:{screen:TabNavigator({
//       QuestionOpen: {
//         screen: PageQuestionOpen,
//         navigationOptions: {
//           tabBarLabel: 'Open',
//         },
//       },
//       QuestionClose: {
//         screen: PageQuestionClose,
//         navigationOptions: {
//           tabBarLabel: 'Close',
//         },
//       },
//     },
//     {
//       tabBarComponent: NavigationComponent,
//       tabBarPosition: 'Top',
//       tabBarOptions: {
//         bottomNavigationOptions: {
//           labelColor: 'white',
//           shifting: false,
//           tabs: {
//             QuestionOpen: {
//               barBackgroundColor: '#00ace6',
//             },
//             QuestionClose: {
//               barBackgroundColor: '#00ace6',
//           }
//         }
//       }
//     }})},
//     QuestionDetail:{screen:PageQuestionDetail},
//   })},
//   Doctor:{screen: StackNavigator({
//     screen:PageDoctor
//   })},
//   Profile:{screen: StackNavigator({
//     screen:PageProfile
//   })},
// }, {
//   tabBarComponent: NavigationComponent,
//   tabBarPosition: 'bottom',
//   tabBarOptions: {
//     bottomNavigationOptions: {
//       labelColor: '#555555',
//       rippleColor: 'grey',
//       shifting: false,
//       tabs: {
//         Home: {
//           barBackgroundColor: 'white'
//         },
//         Question: {
//           barBackgroundColor: 'white',
//           tabBarLabel:'Question',
//         },
//         Doctor: {
//           barBackgroundColor: 'white'
//         },
//         Profile: {
//           barBackgroundColor: 'white'
//         },
//       }
//     }
//   }
// }
//
// );

export default MainScreen;
