//@flow

import React,{Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StatusBar,

} from 'react-native';

export default class PageHospitalList extends Component<{}> {

  static navigationOptions = {
    headerTitle: 'Hospital',
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

  constructor(props){
      super(props);
      this.state = {
        isLoading: true
      }
    }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          data: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  goToPageMaps() {
    this.props.navigation.navigate('MapsHospital');
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

      <View style={styles.container}>
        <StatusBar backgroundColor="#00ace6" barStyle="light-content"/>

        <FlatList data={this.state.data} style={styles.list} ItemSeparatorComponent={this.renderSeparator}
          renderItem={({item}) =>
            <View style={styles.containerItem}>
              <Image style={styles.imgIcon} source={require('../Assets/images/hospital2.png')}></Image>
              <Text onPress={this.goToPageMaps.bind(this)} style={styles.item}>{item.title}, {item.releaseYear} for rendering</Text>
            </View>
          }

          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}


const styles  = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'stretch',
    backgroundColor:'#eeeeee',
    paddingBottom:5,
  },

  list:{
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },

  containerItem:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
    backgroundColor:'white',
    borderRadius: 5,
    alignItems: 'center',
  },

  item: {
    fontSize: 18,
    color: '#626466',
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgIcon:{
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
