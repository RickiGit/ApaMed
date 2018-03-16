//@flow

import React,{Component} from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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
    backgroundColor:'#00000010',
    borderRadius:15,
  },

  textInput:{
    width:250,
    color:'#777777',
    ...Platform.select({
      ios:{
        margin:15,
        borderBottomColor:'#111',
        borderBottomWidth:StyleSheet.hairlineWidth,
      }
    }),
  },

  buttonContainer:{
    margin:20,
  },

  button:{
    width:250,
    padding:10,
    backgroundColor:'#77d40a',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },

  buttonText:{
    color:'white',
  },
});
