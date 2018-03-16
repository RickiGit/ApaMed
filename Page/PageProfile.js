//@flow

import React,{Component} from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

export default class PageProfile extends Component<{}> {

  static navigationOptions = ({navigate, navigation}) => ({
    headerTitle: 'Profile',
    tabBarLabel: 'Profile',
    headerStyle:{
      position:'absolute',
      backgroundColor:'transparent',
      zIndex:100,
      top:0,
      left:0,
      right:0,
      borderBottomWidth:0,
      elevation:0,
      shadowOpacity:0,
    },
    headerTitleStyle:{
      color:'white',
    },
    headerRight: <Button title="Edit" onPress={() => navigation.navigate('Register')}/>,
  });

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://vignette.wikia.nocookie.net/godfather/images/4/40/Don_Vito_Corleone.jpg/revision/latest?cb=20130324224405'}}
        />
        <View style={styles.profileName}>
          <Text style={styles.text1}>Vito Corleone</Text>
          <Text style={styles.text2}>Jakarta, Indonesia</Text>
          <Text style={styles.text3}>vito.corleone@gmail.com</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    padding:20,
    paddingTop:100,
    backgroundColor:'#00ace6',
  },
  profileImage:{
    width:100,
    height:100,
    marginTop:5,
    marginBottom:5,
    borderRadius:50,
  },
  profileName:{
    marginTop:10,
    marginBottom:10,
    alignItems:'center',
  },
  text1:{
    fontSize:24,
    fontWeight:'bold',
    color:'white',
  },
  text2:{
    fontSize:14,
    color:'white',
  },
  text3:{
    fontSize:12,
    color:'white',
  }

});
