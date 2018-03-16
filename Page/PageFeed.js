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
  SpinnerOverlay,
  ActivityIndicator,
  StatusBar
} from 'react-native';

class PageFeed extends React.Component<{}>{

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

  _handleClick(letter) {
    this.props.navigation.navigate('DetailFeed', letter);
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
              <Image style={styles.imageItem} source={{uri: 'https://www.iamexpat.nl/sites/default/files/styles/article--full/public/dutch-healthcare-system.jpg?itok=0MbxOy7D'}}></Image>
              <View style={styles.containerContentItem}>
                <TouchableOpacity>
                  <Text style={styles.item}>{item.title}, {item.releaseYear} A performant interface for rendering</Text>
                </TouchableOpacity>
                <View style={styles.containerItem2}>
                  <Image style={styles.iconImage} source={require('../Assets/images/comment_gray.png')}/>
                  <Text style={styles.titleComment}>30 Comment</Text>
                </View>
              </View>
            </View>
          }

          keyExtractor={(item, index) => index}
        />
      </View>
    );

      // <View style={styles.container}>
      //   <FlatList style={styles.list}
      //   data={[
      //     {key: 'Devin'},
      //     {key: 'Jackson'},
      //     {key: 'James'},
      //     {key: 'Joel'},
      //     {key: 'John'},
      //     {key: 'Jillian'},
      //     {key: 'Jimmy'},
      //     {key: 'Julie'},
      //   ]}
      //
      //   renderItem={({item}) => {return(
      //     <View style={styles.container}>
      //       <View style={styles.box}>
      //         <View>
      //         <Image
      //           style={{
      //             width:50,
      //             height:50,
      //             marginTop:5,
      //             marginEnd:5,
      //           }}
      //           source={{uri: 'https://i1.wp.com/epicureandculture.com/wp-content/uploads/2014/10/Sacred-Earth-Journeys.jpg?w=320&ssl=1'}}/>
      //           </View>
      //           <View style={{flex:1,paddingLeft:10, paddingRight:10, paddingTop:5,alignItems:'stretch'}}>
      //             <Text style={{fontWeight:'bold'}}>{item.key}</Text>
      //           </View>
      //           <View style={{justifyContent:'flex-end'}}>
      //             <TouchableOpacity><Text style={{color:'#888888'}}>...</Text></TouchableOpacity>
      //           </View>
      //       </View>
      //     </View>
      //   )}}
      // />
      //</View>
    //)
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
    alignSelf: 'stretch'
  },

  containerItem:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    backgroundColor:'white',
  },

  containerItem2:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },

  item: {
    fontSize: 18,
    height: 44,
    color: '#111111',
    alignSelf: 'stretch',
    marginLeft: 5,
  },

  containerContentItem:{
    flex: 1,
    flexDirection: 'column',
    marginLeft: 5,
    justifyContent: 'flex-start'
  },

  imageItem:{
    width: 60,
    height: 50,
  },

  iconImage:{
      width: 15,
      height: 15,
      marginRight: 5,
      justifyContent: 'center'
  },

  titleComment:{
    color: '#8c8c8c',
    // shadowOffset: {
    //   width: 0,
    //   height: 3
    // },
    alignSelf: 'stretch',
    // shadowRadius: 5,
    // shadowOpacity: 1.0,
    marginBottom: -10,
  },

  box:{
    flexDirection:'row',
    padding:20,
  }
});

export default PageFeed;
