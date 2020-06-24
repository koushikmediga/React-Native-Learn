import React ,{Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import axios from 'axios';

export default class Ajaxrequest extends Component {

  constructor(props) {
    super(props);
     this.state = {
      persons: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

   
   render(){

       return (
        <View>
        { this.state.persons.map(person => <Text style={styles.item}>{person.name}</Text>)}
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
    item:{
        fontFamily:'font3',
         marginTop:24,
         padding:30,
         backgroundColor: 'skyblue',
         fontSize:24
         
     }

});