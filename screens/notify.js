// // import React , {Component} from 'react';
// // import { Text, View, StyleSheet } from 'react-native';
// // import Expo , { Constants} from 'expo';
// // import {Card} from 'react-native-elements';


// // async function register() {
// //     const {status} = await Expo.Permissions.askAsync(
// //         Expo.Permissions.Notifications
// //     );
// //     if (status !=='granted') {
// //     alert("enable permissions in settings");
// //       return;
// //     }
// //     const token = await Expo.Notifications.getExpoPushTokenAsync();
// //     console.log(status,token);
// // }

// // export default class Audio extends Component {
// //     componentWillMount() {
// //         register();
// //         this.listener = Expo.Notifications.addListener(this.listen)
// //     }
// //     componentWillUnMount() {
// //         this.listener  && Expo.Notifications.removeListener(this.listen)
// //     }

// //     listen = ({origin,data}) => {
// //         console.log("Hi Hi",origin,data)

// //     }
// //     render() {
// //         return (
// //             <View>
// //                 <Text>Hi</Text>
// //                 <Card title="Local Modules">
                  
// //                 </Card>
// //             </View>
// //         )
// //     }
// // }





// // import React , {Component } from 'react';
// // import { Text, View, Button, Vibration, Platform } from 'react-native';
// // import { Notifications } from 'expo';
// // import * as Permissions from 'expo-permissions';
// // import Constants from 'expo-constants';

// // export default class Notify extends Component {
// //   state = {
// //     expoPushToken: '',
// //     notification: {},
// //   };

// //   registerForPushNotificationsAsync = async () => {
// //     if (Constants.isDevice) {
// //       const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
// //       let finalStatus = existingStatus;
// //       if (existingStatus !== 'granted') {
// //         const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
// //         finalStatus = status;
// //       }
// //       if (finalStatus !== 'granted') {
// //         alert('Failed to get push token for push notification!');
// //         return;
// //       }
// //       token = await Notifications.getExpoPushTokenAsync();
// //       console.log(token);
// //       this.setState({ expoPushToken: token });
// //     } else {
// //       alert('Must use physical device for Push Notifications');
// //     }

// //     if (Platform.OS === 'android') {
// //       Notifications.createChannelAndroidAsync('default', {
// //         name: 'default',
// //         sound: true,
// //         priority: 'max',
// //         vibrate: [0, 250, 250, 250],
// //       });
// //     }
// //   };

// //   componentDidMount() {
// //     this.registerForPushNotificationsAsync();
// //     this._notificationSubscription = Notifications.addListener(this._handleNotification);
// //   }

// //   _handleNotification = notification => {
// //     Vibration.vibrate();
// //     console.log(notification);
// //     this.setState({ notification: notification });
// //   };

// //   render() {
// //     return (
// //       <View
// //         style={{
// //           flex: 1,
// //           alignItems: 'center',
// //           justifyContent: 'space-around',
// //         }}>
        
// //         <Button title={'Press to Send Notification'} 
// //         onPress={() => this.sendPushNotification()} />
// //       </View>
// //     );
// //   }
// // }

// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// // import { Notifications ,Constants} from 'expo';
// import Constants from 'expo-constants';

// import Expo from 'expo';

// async function getToken() {
//   // Remote notifications do not work in simulators, only on device
//   if (!Expo.Constants.isDevice) {
//     return;
//   }
//   let { status } = await Expo.Permissions.askAsync(
//     Expo.Permissions.NOTIFICATIONS,
//   );
//   if (status !== 'granted') {
//     return;
//   }
//   let value = await Expo.Notifications.getExpoPushTokenAsync();
//   console.log('Our token', value);
//   /// Send this to a server
// }

// export default class Notify extends Component {
//   componentDidMount() {
//     getToken();

//     this.listener = Expo.Notifications.addListener(this.handleNotification);
//   }

//   componentWillUnmount() {
//     this.listener && this.listener.remove();
//   }

//   handleNotification = ({ origin, data }) => {
//     console.log(
//       `Push notification ${origin} with data: ${JSON.stringify(data)}`,
//     );
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>Expo Notifications Test</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//   },
// });


import React from 'react';
import { Text, View, Button, Vibration, Platform } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default class AppContainer extends React.Component {
  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  componentDidMount() {
    this.registerForPushNotificationsAsync();

    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
      data: { data: 'goes here' },
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
         
        </View>
        <Button title={'Press to Send Notification'} onPress={() => this.sendPushNotification()} />
      </View>
    );
  }
}
