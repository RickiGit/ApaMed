/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {TabNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import PageHome from './PageHome';
import PageQuestion from './PageQuestion';
import PageDoctor from './PageDoctor';
import PageProfile from './PageProfile';

const App = TabNavigator({
  Home: {screen: PageHome},
  Question: {screen: PageQuestion},
  Doctor:{screen: PageDoctor},
  Profile:{screen: PageProfile},
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      shifting: false,
      tabs: {
        Home: {
          barBackgroundColor: '#37474F'
        },
        Question: {
          barBackgroundColor: '#00796B'
        },
        Doctor: {
          barBackgroundColor: '#37474F'
        },
        Profile: {
          barBackgroundColor: '#00796B'
        },
      }
    }
  }
}

);

export default App;
