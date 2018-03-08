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
  Home:{screen:HomeScreen},
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

export default MainScreen;
