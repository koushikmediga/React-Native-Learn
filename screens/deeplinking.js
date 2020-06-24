// import React, { Component } from 'react';
// import { Button, View, StyleSheet } from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
// import Constants from 'expo-constants';
// import * as Linking from 'expo-linking';
// import NavigationContainer from 'react-navigation';

// const prefix = Linking.makeUrl('/');

// export default class Deeplinking extends Component {
//     const linking = {
//         prefixes: [prefix],
//       };
//   render() {
//      return (
//     //   <View style={styles.container}>
//     //     <Button
//     //       title="Open URL with ReactNative.Linking"
//     //       onPress={this._handleOpenWithLinking}
//     //       style={styles.button}
//     //     />
//     //     <Button
//     //       title="Open URL with Expo.WebBrowser"
//     //       onPress={this._handleOpenWithWebBrowser}
//     //       style={styles.button}
//     //     />

//     //     <Button
//     //       title="Makeurlr"
//     //       onPress={this.createurl}
//     //       style={styles.button}
//     //     />
//     //   </View>
    
    
//         <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
//           {/* content */}
//         </NavigationContainer>
      
//     );
//   }

//   _handleOpenWithLinking = () => {
//     Linking.openURL('https://expo.io');
//   };

//   _handleOpenWithWebBrowser = () => {
//     WebBrowser.openBrowserAsync('https://expo.io');
//   };

//   createurl = () => {
//   Linking.makeUrl('google.com');
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   },
//   button: {
//     marginVertical: 10,
//   },
// });

import { Text } from 'react-native';
import * as Linking from 'expo-linking';
import React , {Component} from 'react';

export default class Deeplinking extends Component {
  _handlePress = () => {
    Linking.openURL('www.google.com');
   
  };

  render() {
    return (
      <Text  onPress={this._handlePress}>
        hi
      </Text>
    );
  }
}