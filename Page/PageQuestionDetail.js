//@flow

import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class PageQuestionDetail extends Component<{}>{

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
    return(
      <View style={styles.headerBox}>
        <View style={styles.headerBoxTitle}>
          <Text style={{color:'white', fontWeight:'bold',padding:5,fontSize:20}}>Pregnancy</Text>
          <View style={{backgroundColor:'#e7c154', marginLeft:20, padding:5, borderRadius:10, height:20, justifyContent:'center'}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Gynaecology</Text>
          </View>
        </View>
        <View>
          <Text style={{color:'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique.
          </Text>
        </View>
        <View>
          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
              <Image
                style={{
                  width:30,
                  height:30,
                  marginTop:5,
                  marginEnd:5,
                  borderRadius:15,
                }}
                source={{uri: 'https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg'}}
              />
              <Text style={{fontSize:11, marginLeft:5, color:'white'}}>
                Answered by <Text style={{color:'white', fontWeight:'bold'}}>Dr. Jane Doe</Text>
              </Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
              <Text style={{fontSize:12, color:'white'}}>
                8 Jan 2018
              </Text>
              <Text style={{fontSize:12, color:'white', marginLeft:5}}>
                10:21
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerBox:{
    //flex:1,
    backgroundColor:'#00ace6',
    paddingLeft:20,
    paddingBottom:10,
    paddingRight:20,
    justifyContent:'center',

  },
  headerBoxTitle:{
    flexDirection: 'row',
    alignItems:'center',
  },
});
