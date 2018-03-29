//@flow

import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  Button,
  WebView,
  ScrollView
} from 'react-native';

export default class PageFeedDetail extends Component<{}>{

  static navigationOptions = {
    headerStyle:{
      backgroundColor:'#00ace6',
      borderBottomWidth: 0,
      shadowRadius:0,
      elevation:0,
    },
    headerTitleStyle:{
      color:'white',
    },
    headerBackTitleStyle:{
      color:'white',
    },
    headerTintColor:'white',
  }

  render(){
    const { navigate } = this.props.navigation;
    const navParams = this.props.navigation.state.params;
    return(
      <View style={styles.container}>
        <StatusBar
            backgroundColor="#00ace6"
            barStyle="light-content"
        />

          <View style={styles.header}>
            <View style={styles.backgroundHeader}>
              <Text style={styles.titleHeader}>Lorem Ipsum is simply dummy text of the printing</Text>
              <View style={styles.containerComment}>
                <Image style={styles.iconImage} source={require('../Assets/images/comment.png')}/>
                <Text style={styles.titleComment}>30 Comment</Text>
              </View>
            </View>
          </View>

          <View style={styles.content}>
            <WebView source={{ html: "<style type='text/css'>body{font-family: 'Open Sans', sans-serif; text-align: justify; background-color: '#fcfcfc'}</style><link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'><h4>What is Lorem Ipsum?</h4><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div><div><h4>Why do we use it?</h4><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>" }} />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      flexDirection: 'column',
  },

  header:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  imageHeader:{
    alignItems: 'stretch',
    height: 150
  },

  content:{
    flex: 4,
    flexDirection: 'column'
  },

  backgroundHeader:{
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'flex-end',
    backgroundColor: '#00ace6'
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

  containerComment:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 20
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

  iconImage:{
      width: 20,
      height: 20,
      marginRight: 10
  },
});
