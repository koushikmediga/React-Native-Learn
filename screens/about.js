import React ,{Component} from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { globalStyles } from '../styles/global';
import {Button} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';



export default class About extends Component {

  storeData = async () => {
    try {
      await AsyncStorage.setItem('@user', 'koushik');
      this.getData();
    } catch (e) {
      // saving error
    }
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user')
      if(value !== null) {
        // value previously stored
        alert(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  
   render(){
    return (
      <View style={globalStyles.container}> 
        <Button  style= {styles.press}  onPress={this.storeData}  >
           <Text>Click</Text>
          </Button> 
      </View>
    )
   }
  
}

const styles = StyleSheet.create({
    container:{
        padding: 24,

    },
    titleText:{
        fontFamily:'font2',
        fontSize:40,
        
    },
    press : {
      backgroundColor: 'lightblue',
      color:'black',
      alignItems:'center',
    }

});