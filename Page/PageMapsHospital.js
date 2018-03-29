//@flow

import React,{Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import MapView from 'react-native-maps';

export default class PageMapsHospital extends Component<{}> {

  static navigationOptions = ({navigate, navigation}) => ({
    headerTitle: 'Maps',
    tabBarLabel: 'Maps',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor:'#00ace6',
    },
    headerTitleStyle:{
      color:'white',
    }
  });

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render(){
    const { navigate } = this.props.navigation;
    const navParams = this.props.navigation.state.params;
    var mapView: MapView;

    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#00ace6" barStyle="light-content"/>
        <MapView
          style={ styles.map }
          initialRegion={{
            latitude: -6.270565,
            longitude: 106.759550,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        >

        {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
           coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
           title={"Your Location"}
        />}



      </MapView>
      </View>
    );
  }
}


const styles  = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

});
