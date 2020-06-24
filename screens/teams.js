import React, { useState } from 'react';
import { StyleSheet, View, Text ,ScrollView ,Button} from 'react-native';
import { globalStyles } from '../styles/global';


export default function Teams({navigation}) {

    const[teams,setteams] =useState([
        {name:'SRH', key: '1'},
        {name:'CSK', key: '2'},
        {name:'MI', key: '3'},
        {name:'DC', key: '4'},
        {name:'KXIP', key: '5'},
        {name:'KKR', key: '6'},
        {name:'RR', key: '7'},
        {name:'RCB', key: '8'},


    ])

    const press = () => {
        navigation.navigate('Flexbox');
    }


    
  return (
    <View style={globalStyles.container}>
        <Button title="flexexample" onPress={press} />
        <ScrollView>
          { teams.map((item) => {
              return (
                  <View key ={item.key}>
                      <Text style={styles.item}>{item.name}</Text>
                  </View>
              )
          })}
          </ScrollView>
          
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal:20

    },

    item:{
       fontFamily:'font3',
        marginTop:24,
        padding:30,
        backgroundColor: 'orange',
        fontSize:24
        
    }

});