// import React , { useState, useEffect } from 'react';
// import { StyleSheet, View, Image,Button} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';


// export default function fileupload() {
//     const [image, setImage] = useState(null);
  
//     useEffect(() => {
//       (async () => {
//         if (Constants.platform.ios) {
//           const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
//           if (status !== 'granted') {
//             alert('Sorry, we need camera roll permissions to make this work!');
//           }
//         }
//       })();
//     }, []);
  
//     const pickImage = async () => {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
  
//       console.log(result);
  
//       if (!result.cancelled) {
//         setImage(result.uri);
//       }
//     };
  
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button title="Pick an image from camera roll" onPress={pickImage} />
//         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       </View>
//     );
//   }

// const styles = StyleSheet.create({
//     container:{
//         padding: 24,

//     },
//     titleText:{
//         fontFamily:'font2',
//         fontSize:40,
        
//     }

// });

// import React , { useState, useEffect } from 'react';
// import { StyleSheet, View, Image,Button} from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
// import Constants from 'expo-constants';


// export default function fileupload() {
//     const [image, setImage] = useState(null);
  
//     // useEffect(() => {
//     //   (async () => {
//     //     if (Constants.platform.ios) {
//     //       const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
//     //       if (status !== 'granted') {
//     //         alert('Sorry, we need camera roll permissions to make this work!');
//     //       }
//     //     }
//     //   })();
//     // }, []);
  
//     const pickImage = async () => {
//       let result = await DocumentPicker.getDocumentAsync(
//         //  type: DocumentPicker.Types.Pdf,
//         // allowsEditing: true,
//         // aspect: [4, 3],
//         // quality: 1,
//       );
  
//       console.log(result);
  
//       if (!result.cancelled) {
//         setImage(result.uri);
//       }
//     };
  
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button title="Pick a Doc from mobile" onPress={pickImage} />
//         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       </View>
//     );
//   }

// const styles = StyleSheet.create({
//     container:{
//         padding: 24,

//     },
//     titleText:{
//         fontFamily:'font2',
//         fontSize:40,
        
//     }

// });


// import React, {useRef, useState, useEffect} from 'react';
// import { Text, View, StyleSheet, Animated } from 'react-native';
// import Constants from 'expo-constants';

// // setInterval custom hook by Dan Abramov
// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }


// const App = () => {
//   let animation = useRef(new Animated.Value(0));
//   const [progress, setProgress] = useState(0);
//   useInterval(() => {
//     // update progress until 100
//     if(progress < 100) {
//       setProgress(progress + 5);
//     }
//   }, 1000);

//   useEffect(() => {
//     Animated.timing(animation.current, {
//       toValue: progress,
//       duration: 100
//     }).start();
//   },[progress])

//   const width = animation.current.interpolate({
//     inputRange: [0, 100],
//     outputRange: ["0%", "100%"],
//     extrapolate: "clamp"
//   })

//   return (
//     <View style={styles.container}>
//       <Text>
//         Loading…..
//       </Text>
//       <View style={styles.progressBar}>
//         <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "#8BED4F", width }]}/>
//       </View>
//       <Text>
//         {`${progress}%`}
//       </Text>

//     </View>
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: 'Column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   progressBar: {
//     flexDirection: 'row',
//     height: 20,
//     width: '100%',
//     backgroundColor: 'white',
//     borderColor: '#000',
//     borderWidth: 2,
//     borderRadius: 5
//   }
// });


// import React, { Component } from "react";
// import {ProgressBar} from 'react-bootstrap';
// import axios from 'axios';

// export default class UserCard extends Component {

//   state = {
//     uploadPercentage: 0,
//     avatar: ''
//   }

//   componentDidMount = () =>{
//     const {avatar} = this.props;
//     this.setState({ avatar })
//   }

//   uploadFile = ({ target: { files } }) =>{
//     console.log( files[0] )
//     let data = new FormData();
//     data.append( 'file', files[0] )

//     const options = {
//       onUploadProgress: (progressEvent) => {
//         const {loaded, total} = progressEvent;
//         let percent = Math.floor( (loaded * 100) / total )
//         console.log( `${loaded}kb of ${total}kb | ${percent}%` );

//         if( percent < 100 ){
//           this.setState({ uploadPercentage: percent })
//         }
//       }
//     }

//     axios.post("https://www.mocky.io/v2/5cc8019d300000980a055e76", data, options).then(res => { 
//         console.log(res)
//         this.setState({ avatar: res.data.url, uploadPercentage: 100 }, ()=>{
//           setTimeout(() => {
//             this.setState({ uploadPercentage: 0 })
//           }, 1000);
//         })
//     })
//   }

//   render() {
//     const {uploadPercentage} = this.state;
//     return (
//       <View>
//               <Button onChange={this.uploadFile} />
//               { uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} /> }
//        </View>
             
//     );
//   }
// }

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ProgressBarAndroid } from 'react-native';

import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
//import { ProgressBar } from 'native-base';
import ProgressCircle  from 'react-native-progress-circle';


export default class fileupload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadpercentage: 0,
        }
    }


    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        let data = new FormData();
        console.log(data);
        let source = {uri: result.uri};
        data.append('file', result.uri)
        //JSON.stringify({ name: result.name, size: result.size, type: result.type, uri: result.uri }));
        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total)
                console.log(loaded + 'kb of' + total + 'kb' + percent + '%');
                if( percent < 100 ){
                  this.setState({ uploadPercentage: percent })
                }
            }
        }
        
        axios.post("https://www.mocky.io/v2/5cc8019d300000980a055e76", 
                    data, options).then(res => {
            console.log(res)
            this.setState({ uploadpercentage: 100 }, () => {
                setTimeout(() => {
                    this.setState({ uploadpercentage: 0 })
                }, 1000);
            })
            // console.log(res.data);
        }).catch(error => {
            // console.log(error.response)
        });
        // alert(result.name);
        console.log(result);
    }

    render() {
        const { uploadpercentage } = this.state;
        return (

            <View style={styles.container}>
                <Button
                    title="Select Document"
                    onPress={this._pickDocument}
                />
              {this.state.uploadPercentage >0 &&  <ProgressCircle  percent={this.state.uploadpercentage}
                 radius={50}
                 borderWidth={8}
                  color="#3399FF"
                 shadowColor="#999"
                 bgColor="#fff" 
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={uploadpercentage / 100}
                >
                <Text>Uploaded {uploadpercentage}%</Text>
        </ProgressCircle> }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        paddingBottom: 30,
    }
});

