import React ,{Component} from 'react';
import { StyleSheet, View, Animated} from 'react-native';



export default function Animation({navigation}) {

    const position = new Animated.ValueXY({x:0,y:0})
    Animated.timing(position,{
        toValue:{x:200,y:500},
        duration:3000,
    }).start()


    const rotate= position.x.interpolate({
        inputRange:[0,100],
        outputRange:["0deg","360deg"]
    })
return (
  <View style ={{
      flex:1,

  }}>
   <Animated.View style={{
       height:80,
       width:80,
       alignItems:"center",
       backgroundColor:"purple",
       transform: [
           {translateX:position.x},
           {translateY:position.y},
           {rotate:rotate}
       ]
   }}>

   </Animated.View>

   <Animated.View style={{
       height:80,
       width:80,
    
       backgroundColor:"lightblue",
       transform: [
           {translateX:position.x},
           {rotate:rotate}
       ]
   }}>

   </Animated.View>
  </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding: 24,

    },
    titleText:{
        fontFamily:'font2',
        fontSize:40,
        
    }

});