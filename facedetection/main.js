import React,{Component} from 'react';
 
import {
  StyleSheet,
  
  View
} from 'react-native';
 
import Detector from './comp/Detector';
 

 
const api_key = 'd8bc0e2295004f1bb285836391d040ed';
 
export default class FaceDetector extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Detector  apiKey={api_key} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});