import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FaceDetector from 'expo-face-detector';
import Constants from 'expo-constants';


export default function Imageupload(){

    const [image, setImage] = React.useState(null);
    const [facesCount, setFaces] = React.useState(null);
  
    React.useEffect(() => {
      (async () => {
        if (Constants.platform.ios) {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
         detectFaces(result.uri).then(response => setFaces(response.faces.length));
      }
    };

    let detectFaces = async imageUri => {
        const options = { mode: FaceDetector.Constants.Mode.fast };
        return await FaceDetector.detectFacesAsync(imageUri, options);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      {facesCount && <Text>facesCount: {facesCount}</Text>}
    </View>
    )
}


// import React from 'react';
// import { Text, View, Image, Button } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as FaceDetector from 'expo-face-detector';


// export default function Imageupload(){

//     // const [image, setImage] = React.useState(null);
//     // const [facesCount, setFaces] = React.useState(null);

//     state = {
//       image:null,
//       facesCount:null
//     }
  
//     // React.useEffect(() => {
//     //   (async () => {
//     //     if (Constants.platform.ios) {
//     //       const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
//     //       if (status !== 'granted') {
//     //         alert('Sorry, we need camera roll permissions to make this work!');
//     //       }
//     //     }
//     //   })();
//     // }, []);

//     // componentDidMount = () => {

//     // }
  
//     const pickImage = async () => {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: false,
//         aspect: [4, 3],
//         quality: 1,
//       });
  
//       console.log(result);
  
//       if (!result.cancelled) {
//         this.setstate= {
//         image: result.uri,
//         }
//          detectFaces(result.uri).then(response => setFaces(response.faces.length));
//       }
//     };

//     let detectFaces = async imageUri => {
//         const options = { mode: FaceDetector.Constants.Mode.fast };
//         return await FaceDetector.detectFacesAsync(imageUri, options);
//     }

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

//       {facesCount && <Text>facesCount: {facesCount}</Text>}
//     </View>
//     )
// }