import React, {Component} from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Modal,Image} from 'react-native';
import { Camera } from 'expo-camera';
import { DeviceMotion } from 'expo-sensors';
import * as FaceDetector from 'expo-face-detector';
import * as Permissions from 'expo-permissions';
import { FontAwesome } from '@expo/vector-icons';
import base64ToArrayBuffer from 'base64-arraybuffer';

export default class Cam2 extends Component {
  static defaultProps = {
    countDownSeconds: 5,
    motionInterval: 500, //ms between each device motion reading
    motionTolerance: 1, //allowed variance in acceleration
    cameraType: Camera.Constants.Type.front, //front vs rear facing camera
  }
  
  state = {
    hasCameraPermission: null,
    faceDetecting: false, //when true, we look for faces
    faceDetected: false, //when true, we've found a face
    countDownSeconds: 5, //current available seconds before photo is taken
    countDownStarted: false, //starts when face detected
    pictureTaken: false, //true when photo has been taken
    motion: null, //captures the device motion object 
    detectMotion: false, //when true we attempt to determine if device is still
    capturedPhoto:false,
    btn: false,
    takepic:null,
    setopen:false,
    facedata:null,
  };

  countDownTimer = null;
 
  constructor(props){
    super(props)
    this.checkPermissions();
  }
  async checkPermissions(){
     const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  componentDidMount(){
    this.motionListener = DeviceMotion.addListener(this.onDeviceMotion);
    setTimeout(()=>{ //MH - tempm - wait 5 seconds for now before detecting motion
      this.detectMotion(true);
    },5000);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.detectMotion && nextState.motion && this.state.motion){
      if (
        Math.abs(nextState.motion.x - this.state.motion.x) < this.props.motionTolerance
        && Math.abs(nextState.motion.y - this.state.motion.y) < this.props.motionTolerance
        && Math.abs(nextState.motion.z - this.state.motion.z) < this.props.motionTolerance
      ){
        //still
        this.detectFaces(true);
        this.detectMotion(false);
      } else {
        //moving
      }
    }
    
  }

  detectMotion =(doDetect)=> {
    this.setState({
      detectMotion: doDetect,
    });
    if (doDetect){
      DeviceMotion.setUpdateInterval(this.props.motionInterval);
    } else if (!doDetect && this.state.faceDetecting) {
      this.motionListener.remove();
    }
    
  }

  onDeviceMotion = (rotation)=>{
    this.setState({
      motion: rotation.accelerationIncludingGravity
    });
  }


  detectFaces(doDetect){
    this.setState({
      faceDetecting: doDetect,
    });
  }


  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            style={{ flex: 1 }} 
            type={this.props.cameraType} 
            onFacesDetected={this.state.faceDetecting ? this.handleFacesDetected : undefined }
            onFaceDetectionError={this.handleFaceDetectionError}
            faceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.fast,
              detectLandmarks: FaceDetector.Constants.Mode.none,
              runClassifications: FaceDetector.Constants.Mode.none,
            }}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
              }}>
                  
                
                <Text
                  style={styles.textStandard}>
                  {this.state.faceDetected ? 'Face Detected' : 'No Face Detected'}
                </Text>
            {this.state.faceDetected &&   <TouchableOpacity style={styles.button} onPress={this.takePicture}>
            <FontAwesome name="camera" size={23} color="white" />
            </TouchableOpacity> }

                
             
            </View>
{/* 
            {this.state.faceDetected ? <View> <Button style={styles.button} >
            <FontAwesome name="camera" size={23} color="red" />
          </Button></View> : ""} */}


            {/* <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: this.state.faceDetected && !this.state.pictureTaken ? 'flex' : 'none',
              }}>
                <Text
                  style={styles.countdown}
                >
                  {this.state.countDownSeconds}  
                </Text>
            </View> */}

          </Camera>
        
          { this.state.capturedPhoto && 
          <Modal
          animationType ="slide"
          transparent={false}
          visible={this.state.setopen}
          >
            <View style={{flex:1, justifyContent:'center',
                  alignItems:'center', margin:20}}>
            <TouchableOpacity style={{margin:10}} onPress = { () =>this.setopen2() }>
              <FontAwesome name="window-close" size={50} color="red" />
            </TouchableOpacity>
             <Image 
             style={{width: '100%', height:300, borderRadius: 20}}
             source= {{uri:this.state.takepic}}
             />
            </View>
            
          </Modal>

          }

        </View>
      );
    }
  }

setopen2 =()=> {
    this.setState({
        setopen:false,
    })
}

  handleFaceDetectionError = ()=>{
    //
  }
  handleFacesDetected = ({ faces }) => {
    if (faces.length === 1){
      this.setState({
        faceDetected: true,
        btn:true,
      });
   if (!this.state.faceDetected && !this.state.countDownStarted){
     this.initCountDown();
      }
    }
 else  {
       this.setState({faceDetected: false });
      this.cancelCountDown();
 }
  }
  initCountDown = ()=>{
    this.setState({ 
      countDownStarted: true,
    });
    this.countDownTimer = setInterval(this.handleCountDownTime, 1000);
  }
  cancelCountDown = ()=>{
    clearInterval(this.countDownTimer);
    this.setState({ 
      countDownSeconds: this.props.countDownSeconds,
      countDownStarted: false,
    });
  }
  handleCountDownTime = ()=>{
    if (this.state.countDownSeconds > 0){
      let newSeconds = this.state.countDownSeconds-1;
      this.setState({
        countDownSeconds: newSeconds,
      });
    } else {
      this.cancelCountDown();
     // this.takePicture();
    }
  }

  takePicture = async()=>{
    // this.setState({
    //   capturedPhoto: true,
    // });
    if (this.camera) {
     // console.log('take picture');
     let data= await this.camera.takePictureAsync(
         //{ onPictureSaved: this.onPictureSaved }
         //{quallity:10,base64:true}
         );
        // console.log(data);
         let source = { uri: data.uri}
    //const selfie_ab = base64ToArrayBuffer.decode(data.base64);
     this.setState({
         takepic: data.uri,
         capturedPhoto:true,
        setopen:true,
        facedata:source,
         })
     //console.log(this.state.takepic);
     //console.log(selfie_ab);
    this._detectFaces();
    }
  }
  onPictureSaved = ()=>{
    this.detectFaces(false);
  }
 
  _detectFaces() {
 
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/octet-stream");
    myHeaders.append("Ocp-Apim-Subscription-Key", "d8bc0e2295004f1bb285836391d040ed");


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: this.state.facedata,
      redirect: 'follow'
    };
    
    fetch("https://testproject.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&recognitionModel=recognition_02",
              requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStandard: {
    fontSize: 18, 
    marginBottom: 10, 
    color: 'white'
  },
  countdown: {
    fontSize: 40,
    color: 'white'
  },
  button : {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'orange',
    margin:20,
    borderRadius:10,
    height:50,
    marginBottom:10,
    flex: 1,

  }
});
 