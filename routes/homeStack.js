import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import Teams from '../screens/teams';
import About from '../screens/about';
import Ajaxrequest from '../screens/ajaxrequest';
import Animation from '../screens/animation';
import fileupload from '../screens/fileupload';
import Flexbox from '../screens/flexbox';
import Tools from '../screens/tools';
import Cam from '../screens/camera';
import Loc from '../screens/location';
import Notify from '../screens/notify';
import Language from '../screens/local';
import Imageupload from '../screens/imageupload';
import Cam2 from '../screens/cam2';
import Audio2 from '../screens/audio';
import TodoApp from '../src/TodoApp';
import FooterTabsIconTextExample from '../nativebase/footer';
import Deviceinfo from '../screens/deviceinfo';
import Deeplinking from '../screens/deeplinking';
import FaceDetector from '../facedetection/main';


const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
        return {    
        headerTitle:() => <Header title='Nivedhana' navigation={navigation} />
       }
    },
    },
  Teams: {
    screen: Teams,
    navigationOptions :{
      title: 'scrollview & flexbox',
    }
  },
  Flexbox: {
    screen: Flexbox,
  },
  About: {
    screen:About,
    navigationOptions : {
      title : 'Asyncstorage',
    }
  },
  Ajaxrequest: {
    screen: Ajaxrequest,
  },
  Animation: {
    screen: Animation,
    navigationOptions : {
      title : 'Animations',
    }
  },

  fileupload: {
    screen: fileupload,
    navigationOptions : {
      title : 'imageupload',
    }
  },

  Tools: {
    screen: Tools,
    navigationOptions : {
      title : 'cam,audio&location',
    }
  },
  Cam: {
    screen: Cam,
    navigationOptions : {
      title : 'Camera',
    }
  },

  Loc: {
    screen: Loc,
    navigationOptions : {
      title : 'Location',
    }
  },

  Notify: {
    screen: Notify,
    navigationOptions : {
      title : 'Notification',
    }
  },

  Language: {
    screen: Language,
    navigationOptions : {
      title : 'Language',
    }
  },

  Imageupload: {
    screen: Imageupload,
    navigationOptions : {
      title : 'Imageupload',
    }
  },

  Cam2: {
    screen: Cam2,
    navigationOptions : {
      title : 'Cam2',
    }
  },

  Audio2: {
    screen: Audio2,
    navigationOptions : {
      title : 'Audio2',
    }
  },


  TodoApp: {
    screen: TodoApp,
    navigationOptions : {
      title : 'Redux',
    }
  },

  FooterTabsIconTextExample: {
    screen: FooterTabsIconTextExample,
    navigationOptions : {
      title : 'Native',
    }
  },

  Deviceinfo: {
    screen: Deviceinfo,
    navigationOptions : {
      title : 'Deviceinfo',
    }
  },

  Deeplinking: {
    screen: Deeplinking,
    navigationOptions : {
      title : 'Deeplinking',
    }
  },

  FaceDetector: {
    screen: FaceDetector,
    navigationOptions : {
      title : 'FaceDetector',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default HomeStack;
