import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading } from 'expo';
import Navigator from './routes/drawer';

import store from './src/store'
import { Provider } from 'react-redux'


const getFonts = () => Font.loadAsync({
  'font1':require('./assets/fonts/CedarvilleCursive-Regular.ttf'),
  'font2': require('./assets/fonts/TenaliRamakrishna-Regular.ttf'),
  'font3': require('./assets/fonts/Piedra-Regular.ttf')

});

export default function App() {
  const [fontsLoaded,setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  } else {
    return(
      <AppLoading 
      startAsync= {getFonts}
      onFinish={()=> setFontsLoaded(true)}
      />
    )
  }

}
