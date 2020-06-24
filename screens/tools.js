import React from 'react';
import { View, Button} from 'react-native';
import { globalStyles } from '../styles/global';




export default  function Tools({navigation}) { 
  
    // const pressHandler = () => {
    //     navigation.navigate('Cam');
    // }

    const pressHandler2 = () => {
        navigation.navigate('Loc');
    }

    
    const pressHandler3 = () => {
        navigation.navigate('Notify');
    }

    // const pressHandler4 = () => {
    //     navigation.navigate('fileupload');
    // }

    const pressHandler5 = () => {
        navigation.navigate('Language');
    }

    const pressHandler6 = () => {
        navigation.navigate('Imageupload');
    }

    const pressHandler7 = () => {
        navigation.navigate('Cam2');
    }

    const pressHandler8 = () => {
        navigation.navigate('Audio2');
    }
    const pressHandler20 = () => {
        navigation.navigate('fileupload');
    }

    return (

        <View style={globalStyles.container}>

            
            <View style={globalStyles.container}>
            <Button title='take photo'  onPress={pressHandler7}/>
            </View>

            <View style={globalStyles.container}>
                <Button title='imageupload'  onPress={pressHandler6}/>
              </View>
            
           <View style={globalStyles.container}>
            <Button title='Location'  onPress={pressHandler2}/>
            </View>

            <View style={globalStyles.container}>
            <Button title='Notification'  onPress={pressHandler3}/>
            </View>

            <View style={globalStyles.container}>
            <Button title='Language'  onPress={pressHandler5}/>
            </View>

            <View style={globalStyles.container}>
            <Button title='Audio'  onPress={pressHandler8}/>
            </View>

            <View style={globalStyles.container}>
            <Button title='fileupload'  onPress={pressHandler20}/>
            </View>

            {/* <View style={globalStyles.container}>
            <Button title='Cam'  onPress={pressHandler}/>
            </View> */}

            

        

    </View>
     
    )
}


