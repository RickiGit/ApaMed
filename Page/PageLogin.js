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

export default class PageLogin extends Component<{}>{

  static navigationOptions = {
    header:null,
  };

  render(){
    const{ navigate } = this.props.navigation;

    return(
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.textContainer}>
            <TextInput placeholder="Email" style={styles.textInput}/>
            <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true}/>
            {/* <TextInput placeholder="Date Of Birth" style={styles.textInput}/> */}
            {/* <DatePickerIOS></DatePickerIOS>
            <DatePickerAndroid></DatePickerAndroid> */}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=> navigate('Register')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
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
    backgroundColor:'#ffffff90',
    borderRadius:15,
  },

  textInput:{
    width:250,
    color:'#555555',
    ...Platform.select({
      ios:{
        margin:15,
        borderBottomColor:'#333333',
        borderBottomWidth:StyleSheet.hairlineWidth,
      }
    }),
  },

  buttonContainer:{
    flexDirection:'row',
    margin:20,
  },

  button:{
    width:125,
    padding:10,
    backgroundColor:'#77d40a',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginLeft:5,
    marginRight:5,
  },

  buttonText:{
    color:'white',
  },
});
