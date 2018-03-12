import React,{Component} from 'react';
import {TabNavigator,StackNavigator} from 'react-navigation';
import PageHome from './PageHome';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  AppRegistry,
  Alert,
  Navigator,
  SpinnerOverlay
} from 'react-native';

class PageFeed extends React.Component<{}>{

  constructor(props) {
    super(props)
  }


  render(){
    const { navigate } = this.props.navigation;
    return(
      // <View style={styles.container}>
        <FlatList style={styles.list}
        data={[
          {key: 'Devin'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}

        renderItem={({item}) => {return(
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
                <View style={{flex:1,paddingLeft:10, paddingRight:10, paddingTop:5,alignItems:'stretch'}}>
                  <Text style={{fontWeight:'bold'}}>{item.key}</Text>
                </View>
                <View style={{justifyContent:'flex-end'}}>
                  <TouchableOpacity><Text style={{color:'#888888'}}>...</Text></TouchableOpacity>
                </View>
            </View>
          </View>
        )}}
      />
      //</View>
    )
  }
}

const styles  = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'stretch',
    backgroundColor:'#eeeeee',
  },
  list:{
    alignSelf: 'stretch'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    alignSelf: 'stretch',
  },
  box:{
    //flex:1,
    flexDirection:'row',
    //margin:20,
    padding:20,
    //backgroundColor:'#999999',
  }
});

export default PageFeed;
