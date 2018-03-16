//@flow

import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  DatePickerIOS,
  DatePickerAndroid,
} from 'react-native';

export default class PageRegister extends Component<{}>{

  static navigationOptions = {
    header:null,
  };

  render(){
    return(
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.titleChild}>Mari Daftarkan Akunmu</Text>
          </View>
          <View style={styles.textContainer}>
            <TextInput placeholder="Name" style={styles.textInput}/>
            <TextInput placeholder="Email" style={styles.textInput}/>
            <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true}/>
            {/* <TextInput placeholder="Date Of Birth" style={styles.textInput}/> */}
            {/* <DatePickerIOS></DatePickerIOS>
            <DatePickerAndroid></DatePickerAndroid> */}
          </View>
          <View style={styles.buttonContainer}>
            <Button color='white' title='Submit' style={styles.button}/>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    paddingTop:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00ace6',
  },

  titleContainer:{
    justifyContent:'center',
    alignItems:'center',
  },

  title:{
    color:'white',
    fontSize:40,
    fontWeight:'bold',
  },

  titleChild:{
    fontSize:12,
    color:'white',
  },

  textContainer:{
    marginTop:30,
    padding:20,
    backgroundColor:'white',
    borderRadius:15,
  },

  textInput:{
    margin:15,
    width:250,
    color:'#777777',
    borderBottomColor:'#111',
    borderBottomWidth:StyleSheet.hairlineWidth,
  },

  buttonContainer:{
    margin:20,
  },

  button:{
    width:250,
  }
});
