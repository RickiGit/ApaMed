//@flow

import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

export default class PageQuestionOpen extends Component<{}>{

  static navigationOptions = {
    headerTitle: 'Question',
    headerStyle: {
        backgroundColor: '#00ace6',
        borderBottomWidth: 0,
    },
    headerTitleStyle:{
        color: 'white',
    }
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={style.container}>
        <StatusBar
           barStyle="light-content"
        />
        <View style={style.thread}>
          <View style={style.threadTitle}>
            <Text style={{color:'#00ace6', fontWeight:'bold',}}>
              Pregnancy
            </Text>
            <Text>
              8 Jan 2018
            </Text>
          </View>
          <View style={{marginTop:5,}}>
            <Text style={style.threadContent}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Text>
          </View>
          <View style={style.threadTitle,{marginTop:5}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
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
              <Text style={{fontSize:11, marginLeft:5}}>
                Answered by dr. Jane Doe
              </Text>
            </View>
            <View>
              <Image />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    flex:1, justifyContent:'flex-start',
    alignItems:'stretch',
  },
  thread:{
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  threadTitle:{
    justifyContent: 'space-between',
    flexDirection:'row',
  },
  threadContent:{
    textAlign:'justify',
  }
});
