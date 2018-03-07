import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default class PageFeed extends Component<{}>{
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box}>
            <View>
            <Image
              style={{
                width:50,
                height:50,
                marginTop:5,
                marginEnd:5,
              }}
              source={{uri: 'https://i1.wp.com/epicureandculture.com/wp-content/uploads/2014/10/Sacred-Earth-Journeys.jpg?w=320&ssl=1'}}/>
              </View>
              <View style={{paddingLeft:10, paddingRight:10, paddingTop:5,}}>
                <Text style={{fontWeight:'bold'}}>Learn to live with it: Becoming stress-free</Text>
              </View>
              <View style={{justifyContent:'flex-end'}}>
                <Text style={{color:'#888888'}}>...</Text>
              </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.box}>
            <View>
            <Image
              style={{
                width:50,
                height:50,
                marginTop:5,
                marginEnd:5,
              }}
              source={{uri: 'https://i1.wp.com/epicureandculture.com/wp-content/uploads/2014/10/Sacred-Earth-Journeys.jpg?w=320&ssl=1'}}/>
              </View>
              <View style={{paddingLeft:10, paddingRight:10, paddingTop:5,}}>
                <Text style={{fontWeight:'bold'}}>Learn to live with it: Becoming stress-free</Text>
              </View>
              <View style={{justifyContent:'flex-end'}}>
                <Text style={{color:'#888888'}}>...</Text>
              </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.box}>
            <View>
            <Image
              style={{
                width:50,
                height:50,
                marginTop:5,
                marginEnd:5,
              }}
              source={{uri: 'https://i1.wp.com/epicureandculture.com/wp-content/uploads/2014/10/Sacred-Earth-Journeys.jpg?w=320&ssl=1'}}/>
              </View>
              <View style={{paddingLeft:10, paddingRight:10, paddingTop:5,}}>
                <Text style={{fontWeight:'bold'}}>Learn to live with it: Becoming stress-free</Text>
              </View>
              <View style={{justifyContent:'flex-end'}}>
                <Text style={{color:'#888888'}}>...</Text>
              </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.box}>
            <View>
            <Image
              style={{
                width:50,
                height:50,
                marginTop:5,
                marginEnd:5,
              }}
              source={{uri: 'https://i1.wp.com/epicureandculture.com/wp-content/uploads/2014/10/Sacred-Earth-Journeys.jpg?w=320&ssl=1'}}/>
              </View>
              <View style={{paddingLeft:10, paddingRight:10, paddingTop:5,}}>
                <Text style={{fontWeight:'bold'}}>Learn to live with it: Becoming stress-free</Text>
              </View>
              <View style={{justifyContent:'flex-end'}}>
                <Text style={{color:'#888888'}}>...</Text>
              </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles  = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:5,
    //backgroundColor:'#ff0000',
  },
  box:{
    //flex:1,
    flexDirection:'row',
    //margin:20,
    padding:20,
    //backgroundColor:'#999999',
  }
});