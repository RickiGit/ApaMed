//@flow

import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class PageQuestionOpen extends Component<{}>{

  constructor(props){
    super(props)
  }

  static navigationOptions = {
    headerTitle: 'Question',
    headerStyle: {
        backgroundColor: '#00ace6',
        borderBottomWidth: 0,
        shadowRadius:0,
        elevation:0,
    },
    headerTitleStyle:{
        color: 'white',
    },
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={style.container}>
        <StatusBar
          barStyle="light-content"
       />

      <FlatList style={{alignSelf:'stretch'}}
        data={[
          {
            title:'Pregnancy',
            date: '8 Jan 2018',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique.',
            doctorName:'Dr. Jane Doe',
          },
          {
            title:'Cancer',
            date: '22 Feb 2018',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique.',
            doctorName:'Dr. Jackson',
          }
        ]}

        renderItem={({item}) => {return(
           <TouchableOpacity style={style.thread} onPress={() => navigate("QuestionDetail")}>
             <View style={style.threadTitle}>
               <Text style={{color:'#00ace6', fontWeight:'bold',}}>
                 {item.title}
               </Text>
               <Text>
                 {item.date}
               </Text>
             </View>
             <View style={{marginTop:5,}}>
               <Text style={style.threadContent}>
                 {item.content}
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
                   Answered by <Text style={{color:'#00ace6'}}>{item.doctorName}</Text>
                 </Text>
               </View>
               <View>
                 <Image />
               </View>
             </View>
           </TouchableOpacity>
       )}}
      />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
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
