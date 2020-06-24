import React ,{Component} from 'react';
import { View,Text,Button } from 'react-native';
import { Localization } from 'expo';
import i18n from 'i18n-js';


   const en = { 
       welcome: 'Hello',
       name: 'Charlie' ,
    };
    const ja = { 
        welcome: 'こんにちは',
     };
  
    i18n.translations = {ja,en};
   i18n.locale = "en";
   i18n.fallbacks = true;


export default class Language extends Component {
    constructor() {
        super();
        this.state = {
            currentLanguage: ""
        }
      }
 changelang =(lang) =>{  
        this.setState({ currentLanguage: lang });
     }

     componentWillUnmount = () => {
         this.setState({currentLanguage:"en"})
     }
 

    render() {

        i18n.locale = this.state.currentLanguage;
        i18n.fallbacks = true;
        i18n.translations = { en, ja };
        return (
            <View>
            <View><Text>
              {i18n.t('welcome')} {i18n.t('name')}</Text></View>

              <View><Button title="change Language" 
              onPress={()=>this.changelang("ja")}
               /></View>
            
            </View>
          );
    }
 
}

