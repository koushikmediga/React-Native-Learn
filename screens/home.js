import React from 'react';
import { StyleSheet, Text, View, Button ,ToastAndroid} from 'react-native';
import { globalStyles } from '../styles/global';
import NetInfo from "@react-native-community/netinfo";



export default  function Home({navigation}) { 
  var conn;
  
    const unsubscribe = NetInfo.addEventListener(state => {
        conn = `${state.type} connected`;
        
        console.log(state.isConnected);
      
      });
      
      // Unsubscribe
      unsubscribe();

      const showToast=()=> {
          ToastAndroid.showWithGravity(
              conn ,
              ToastAndroid.SHORT,
              ToastAndroid.TOP,
          )
      }

      showToast();
      
    const pressHandler = () => {
        navigation.navigate('Teams');
    }

    const pressHandler2 = () => {
        navigation.navigate('Tools');
    }
  

    const pressHandler3 = () => {
        navigation.navigate('About');
    }

    const pressHandler4 = () => {
        navigation.navigate('Ajaxrequest');
    }


    const pressHandler5 = () => {
        navigation.navigate('Animation');
    }

    const pressHandler10 = () => {
        navigation.navigate('FoodForm');
    }

    const pressHandler11 = () => {
        navigation.navigate('FooterTabsIconTextExample');
    }

    const pressHandler12 = () => {
        navigation.navigate('Deviceinfo');
    }

    const pressHandler13 = () => {
        navigation.navigate('TodoApp');
    }

    const pressHandler15 = () => {
        navigation.navigate('Deeplinking');
    }

    const pressHandler30 = () => {
        navigation.navigate('FaceDetector');
    }
    
    return (

        <View style={globalStyles.container}>
            <Text style={styles.titleText}>Home Screen</Text>

        <View style={globalStyles.container}>
            <Button title='scrollview & flexbox'  onPress={pressHandler}/>
            </View>
            
            <View style={globalStyles.container}>
            <Button title='AsyncStorage'  onPress={pressHandler3}/>
            </View>

            <View style={globalStyles.container}>
            <Button title='Ajaxrequest'  onPress={pressHandler4}/>
            </View>


            <View style={globalStyles.container}>
            <Button title='Animations'  onPress={pressHandler5}/>
            
            </View>

             {/* <View style={globalStyles.container}>
             <Button title='network?'  onPress={showToast}/>
            
            </View>  */}

            <View style={globalStyles.container}>
             <Button title='cam,audio&location'  onPress={pressHandler2}/>
            
            </View> 

            {/* <View style={globalStyles.container}>
             <Button title='Redux'  onPress={pressHandler10}/>
            
            </View>  */}

            <View style={globalStyles.container}>
             <Button title='Redux'  onPress={pressHandler13}/>
            
            </View>

            <View style={globalStyles.container}>
             <Button title='Native'  onPress={pressHandler11}/>
            
            </View>

            <View style={globalStyles.container}>
             <Button title='Deviceinfo'  onPress={pressHandler12}/>
            
            </View>

            <View style={globalStyles.container}>
             <Button title='Deeplinking'  onPress={pressHandler15}/>
            
            </View>

            <View style={globalStyles.container}>
             <Button title='FaceDetector'  onPress={pressHandler30}/>
            
            </View>

    </View>
     
    )
}


const styles = StyleSheet.create({
    container:{
        padding: 24,

    },
    titleText:{
        fontFamily:'font1',
        fontSize:40,
        
    }

});