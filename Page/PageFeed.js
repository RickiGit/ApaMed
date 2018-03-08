import React,{Component} from 'react';
import {TabNavigator,StackNavigator} from 'react-navigation';
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
      <View style={styles.container}>
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
          <TouchableHighlight onPress={() => this.CallFunction_1()}>
                <Text style={styles.item}>{item.key}</Text>
          </TouchableHighlight>
        )}}
      />
      </View>
    )
  }
}

const styles  = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
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
