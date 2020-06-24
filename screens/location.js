import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet,Button,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Geocoder from 'react-native-geocoding';

//AIzaSyAwfkfZrs3V-nh1WVBZssDHJbNJGL91Gr8
Geocoder.init("AIzaSyAwfkfZrs3V-nh1WVBZssDHJbNJGL91Gr8"); 

export default class Loc extends Component {
  state = {
    location: null,
    errorMessage: null,
    latitude:0,
    longitude:0,
  };

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location)
    this.setState({ location });
  };

      // let location = await Location.getCurrentPositionAsync((position) =>
      // {
      //   this.setState({
      //     latitude: position.coords.latitude,
      //     longitude: position.coords.longitude,
      //     location:position,
      //   });
      // }
      // )
      
      getData() {

        
        
        Geocoder.from(41.89, 12.49)
		.then(json => {
        		var addressComponent = json.results[0].address_components[0];
		alert(addressComponent);
		})
		.catch(error => console.warn(error));
      }

//   Geocoder.init("AIzaSyAwfkfZrs3V-nh1WVBZssDHJbNJGL91Gr8", {language : "en"});

//     _attemptReverseGeocodeAsync = async () => {
//         this.setState({ inProgress: true });
//         try {
//         let result = await Location.reverseGeocodeAsync(
//         this.state.selectedExample
//         );
//         this.setState({ result });
//         } catch (e) {
//         this.setState({ error: e });
//         } finally {
//         this.setState({ inProgress: false });
//         }
//         };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={styles.container} >
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
        </View>
        <View style={styles.container}>
        <TouchableOpacity title="getLocName" onPress={this.getData}>
          <Text>address</Text>
          </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});


