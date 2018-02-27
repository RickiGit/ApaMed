/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {TabNavigator,StackNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import PageHome from './PageHome';
import PageQuestion from './PageQuestion';
import PageDoctor from './PageDoctor';
import PageProfile from './PageProfile';

const App = TabNavigator({
  Home: {screen: StackNavigator({
    screen: TabNavigator({
      screen:PageHome
    },{
      tabBarComponent: NavigationComponent,
      tabBarPosition: 'top',
    })
  })},
  Question: {screen: StackNavigator({
    screen:PageQuestion
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
          barBackgroundColor: 'white'
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
