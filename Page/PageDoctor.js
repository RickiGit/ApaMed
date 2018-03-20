//@flow

import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  TextInput,
  Image,
  Button,
  Platform,
} from 'react-native';

export default class PageDoctor extends Component<{}>{

  static navigationOptions = {
    headerTitle: 'Doctor',
    tabBarLabel: 'Doctor',
    headerStyle:{
      backgroundColor:'#00ace6',
    },
    headerTitleStyle:{
      color:'white',
    },
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#00ace6" barStyle="light-content"/>
        <View style={styles.searchbarContainer}>
          <Text style={styles.logoImage}>Search</Text>
          <TextInput style={styles.searchbar} placeholder="Find a doctor" underlineColorAndroid='transparent'/>
        </View>
        <View style={styles.flatlist}>
          {/* list1 */}
          <View style={styles.listContainer}>
            <View style={styles.listContainer1}>
              <Image
                source={{uri:'https://image.freepik.com/free-vector/doctor-background-design_1270-62.jpg'}}
                style={styles.imageDoctor}
              />
            </View>
            <View style={styles.listContainer2}>
              <Text style={styles.textNama}>Dr. Doctor Name</Text>
              <Text style={styles.textSpesialis}>Specialist</Text>
              <Text>.</Text>
              <Text>.</Text>
              <Text>.</Text>
            </View>
            <View style={styles.listContainer3}>
              <Button title="Ask!" onPress={() => alert('Ask Button Pressed')}/>
            </View>
          </View>

          {/* list2 */}
          <View style={styles.listContainer}>
            <View style={styles.listContainer1}>
              <Image
                source={{uri:'https://image.freepik.com/free-vector/doctor-background-design_1270-62.jpg'}}
                style={styles.imageDoctor}
              />
            </View>
            <View style={styles.listContainer2}>
              <Text style={styles.textNama}>Dr. Doctor Name</Text>
              <Text style={styles.textSpesialis}>Specialist</Text>
              <Text>.</Text>
              <Text>.</Text>
              <Text>.</Text>
            </View>
            <View style={styles.listContainer3}>
              <Button title="Ask!" onPress={() => alert('Ask Button Pressed')}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    justifyContent:'flex-start',
    alignItems:'stretch',
  },

  searchbarContainer:{
    backgroundColor:'white',
    borderRadius:5,
    ...Platform.select({
      ios:{
        padding:15,
      },
      android:{
        paddingLeft:15,
        paddingRight:15,
      }
    }),
    flexDirection:'row',
    alignItems:'center',
  },

  logoImage:{
    marginRight:10,
    fontWeight:'bold'
  },

  searchbar:{
    flex:1,
    alignSelf:'center',
  },

  flatlist:{
    paddingTop:5,
  },

  listContainer:{
    backgroundColor:'white',
    borderRadius:5,
    padding:10,
    marginTop:10,
    flexDirection:'row',
  },

  listContainer1:{
    justifyContent:'center',
    alignItems:'center',
    marginRight:30,
    marginLeft:10,
  },

  listContainer2:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },

  listContainer3:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },

  imageDoctor:{
    width:40,
    height:40,
    borderRadius:20,
  },

  textNama:{
    fontWeight:'bold',
  },

  textSpesialis:{
    fontSize:12,
  },

  maps:{
    flex:1,
  },



});
