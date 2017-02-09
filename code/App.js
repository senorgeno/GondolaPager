import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Platform,
} from 'react-native';
import OneSignal from 'react-native-onesignal';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';

const url = "http://lacavewebradio.chickenkiller.com:8000/stream.mp3";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
        }
    }
    componentWillMount() {
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('registered', this.onRegistered);
        OneSignal.addEventListener('ids', this.onIds);
    }
    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('registered', this.onRegistered);
        OneSignal.removeEventListener('ids', this.onIds);
    }
    onReceived(notification) {
        console.log("Notification received: ", notification);
        ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
    }
    onOpened(openResult) {
      console.log('Message: ', openResult.notification.payload.body);
      console.log('Data: ', openResult.notification.payload.additionalData);
      console.log('isActive: ', openResult.notification.isAppInFocus);
      console.log('openResult: ', openResult);
      ReactNativeAudioStreaming.stop();
    }

    onRegistered(notifData) {
        console.log("Device had been registered for push notifications!", notifData);
    }

    onIds(device) {
        console.log('Device info: ', device);
    }

    onButtonPress = () =>{
        this.setState({status : !this.state.status});
    }
    statusOfUser() {
        return this.state.status ? 'in the air' : 'on the ground';
    }
    // componentDidUpdate () {
    //     if(this.state.status) {
    //         ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
    //     } else {
    //         ReactNativeAudioStreaming.stop();
    //     }
    // }
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to the Gondola Prototype
            </Text>
            <Text style={styles.instructions}>
              You are {this.statusOfUser()}.
            </Text>
            <Button onPress={this.onButtonPress}
              title="Turn Sound On/Off"
              accessibilityLabel="Change the pilot's status" />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
