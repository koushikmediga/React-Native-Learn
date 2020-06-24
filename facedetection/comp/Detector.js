import React, {Component} from 'react';
 
import {
  
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
 
 
//import  { ImagePickerManager } from 'react-native-image-picker';

import * as ImagePicker from 'expo-image-picker'
 
import Button from './Button';
 
//import RNFetchBlob from 'react-native-fetch-blob';
//import base64ToArrayBuffer from 'base64-arraybuffer';
 
import _ from 'lodash';
import axios from 'axios';
 
export default class Detector extends Component {
  constructor(props) {
      super(props);
    this.state = {
        has_photo: false,
        photo: null,
        face_data: null
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
         
        <Image
            style={this.state.photo_style}
            source={this.state.photo}
            resizeMode={"contain"}
        >
            { this._renderFaceBoxes .call(this) }
        </Image>
     
        <Button
            text="Pick Photo"
            onpress={this._pickImage.bind(this)}
            button_styles={styles.button}
            button_text_styles={styles.button_text} />
 
        { this._renderDetectFacesButton.call(this) }
 
      </View>
    );
  }
 
 
   _pickImage = async () => {
     
    // this.setState({
    //     face_data: null
    // });
 
    let response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
         console.log(response);
      if(response.error){
        alert('Error getting the image. Please try again.');
      }else{
         
        let source = {uri: response.uri};
       // const selfie_ab = base64ToArrayBuffer.decode(source.base64);
        this.setState({
          has_photo: true,
          photo: source,
         // face_data: seflie_ab   // base64 representation of image
        });
        //console.log(this.state.photo_data);
        console.log(this.state.photo);
       // console.log(seflie_ab);
         
      }
    
 
  }
 
  _renderDetectFacesButton() {
    if(this.state.has_photo){
        return  (
            <Button
                text="Detect Faces"
                onpress={this._detectFaces.bind(this)}
                button_styles={styles.button}
                button_text_styles={styles.button_text} />
        );
    }
  }
 
  _detectFaces() {
 
    //const selfie_ab = base64ToArrayBuffer.decode(data.bas);
    
    //var ddd = this.state.photo_data;
    //var raw = JSON.stringify(this.state.photo_data);
    // var formdata = new FormData();
    // formdata.append(this.state.photo_data);
    

    // var formdata = new FormData();
    // formdata.append(fileInput.files[0], this.state.photo);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/octet-stream");//octet-stream as we are using local photo
    myHeaders.append("Ocp-Apim-Subscription-Key", "d8bc0e2295004f1bb285836391d040ed");


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: this.state.photo,
      redirect: 'follow'
    };
    
    fetch("https://testproject.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&recognitionModel=recognition_02&faceRectangle=false", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));



    // axios.post('https://testproject.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=truer', {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/octet-stream',
    //     'Ocp-Apim-Subscription-Key': this.props.apiKey
    // }, this.state.photo_data)
    // .then((res) => {
    //     return res.json();      
    // })
    // .then((json) => {
         
    //     if(json.length){
    //         this.setState({
    //             face_data: json
    //         });
    //     }else{
    //         alert("Sorry, I can't see any faces in there.");
    //     }
         
    //     return json;
    // })
    // .catch (function (error) {
    //     console.log(error);
    //     alert('Sorry, the request failed. Please try again.' + JSON.stringify(error));
    // });
     
 
  }
 
  _renderFaceBoxes () {
 
    if(this.state.face_data){
 
        let views = _.map(this.state.face_data, (x) => {
             
            let box = {
                position: 'absolute',
                top: x.faceRectangle.top,
                left: x.faceRectangle.left
            };
 
            let style = { 
                width: x.faceRectangle.width,
                height: x.faceRectangle.height,
                borderWidth: 2,
                borderColor: '#fff',
            };
             
            let attr = {
                color: '#fff',
            };
 
            return (
                <View key={x.faceId} style={box}>
                    <View style={style}></View>
                    <Text style={attr}>{x.faceAttributes.gender}, {x.faceAttributes.age} y/o</Text>
                </View>
            );
        });
 
        return <View>{views}</View>
    }
 
  }
   
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
   
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  button_text: {
    color: '#FFF',
    fontSize: 20
  }
});