import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Help from '../screens/help';
// import FoodForm from '../src/foodForm';



const screens = {
  Help: {
    screen: Help,
    navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='Help' navigation={navigation} />
        }
      },
    },
    // Redux: {
    //   screen: FoodForm,
    //   },
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       headerTitle: () => <Header title='Redux' navigation={navigation} />
    //     }
    //   },

     
};

// home stack navigator screens
const AboutStack = createStackNavigator(screens);

export default AboutStack;
