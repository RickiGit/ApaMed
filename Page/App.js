/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {TabNavigator,StackNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import PageHome from './PageHome';
import PageDoctor from './PageDoctor';
import PageProfile from './PageProfile';
import PageQuestionOpen from './PageQuestionOpen';
import PageQuestionClose from './PageQuestionClose';

const App = TabNavigator({
  Home: {screen: StackNavigator({
    screen:PageHome
  })},
  Question: {screen: StackNavigator({
    screen: TabNavigator({
      Open: {screen: PageQuestionOpen},
      Close: {screen: PageQuestionClose},
    }, {
      tabBarComponent: NavigationComponent,
      tabBarPosition: 'top',
      tabBarLabel: 'Question',
    })
  })},
  Doctor:{screen: StackNavigator({
    screen:PageDoctor
  })},
  Profile:{screen: StackNavigator({
    screen:PageProfile
  })},
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: '#555555',
      rippleColor: 'grey',
      shifting: false,
      tabs: {
        Home: {
          barBackgroundColor: 'white'
        },
        Question: {
          barBackgroundColor: 'white',
          tabBarLabel:'Question',
        },
        Doctor: {
          barBackgroundColor: 'white'
        },
        Profile: {
          barBackgroundColor: 'white'
        },
      }
    }
  }
}

);

export default App;
