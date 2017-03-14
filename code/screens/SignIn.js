import React, { Component } from 'react';
import { Alert, Text, StyleSheet, Button, View } from 'react-native';
import { connect } from 'react-redux';
import Container from '../components/Container';
import { Card } from 'react-native-elements';
import { Input, PrimaryButton, SecondaryButton } from '../components/Form';
import { NavigationActions } from 'react-navigation';
//import styles from '../styles';
import config from '../config/config';


const SignIn = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Screen A
    </Text>
    <Text style={styles.instructions}>
      This is the login screen
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Log in"
    />
  </View>
);


// SignIn.navigationOptions = {
//   title: 'Home Screen',
// };


// class SignIn extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       username: '',
// 			password: '',
// 			loggedIn: false,
// 			expire: null,
//       loading: false
//     };
//   }
//
//   _signIn = () => {
//     const { username, password } = this.state;
//     const { navigate } = this.props.navigation;
//
//     this.setState({ loading: true });
//
//     fetch(config.API_HOST + 'api/auth/login?email=' + username + '&pwd=' + password)
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({ loading: false });
//         if(json.result) {
//     				let t = new Date(json.expire);
//     				let formatted = t.toISOString();
//     				this.setState({
//     					loggedIn : true,
//     					//expire : formatted,
//     				});
//             this.props.navigation.navigate('Pilot', { ...this.state });
//     			} else {
//     				Alert.alert(
//             	'Login Failed',
//             		'Please try again',
//           		);
//     			}
//
//       })
//       .catch((error) => {
//         console.warn(error);
//       });
//
//   }
//   _signOut = () => {
//     this.setState({
//       username: '',
//       password: '',
//       loggedIn: false,
//       expire: null,
//       pilotStatus: 'Ground',
//     });
//   }
//   render () {
// 		if (this.state.loggedIn) {
// 			return this.renderStatusScreen();
// 		}
// 		return this.renderLogin();
// 	}
//   renderLogin() {
//     return (
//       <Container scroll>
//         <Card>
//           <Input
//             label="Email or PIN"
//             placeholder="Please enter your email or PIN..."
//             onChangeText={(username) => this.setState({ username })}
//             value={this.state.username}
//           />
//           <Input
//             label="Password"
//             placeholder="Please enter your password..."
//             secureTextEntry
//             onChangeText={(password) => this.setState({ password })}
//             value={this.state.password}
//           />
//           <PrimaryButton
//             title="Sign In"
//             onPress={this._signIn}
//             loading={this.state.loading}
//           />
//         </Card>
//       </Container>
//     );
//   }
//   renderStatusScreen() {
//     return (
//       <Container scroll>
//         <Card>
//           <Text>You are signed in</Text>
//         </Card>
//         <SecondaryButton
//           title="Sign Out"
//           onPress={this._signOut}
//         />
//       </Container>
//     );
//   }
// }

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

export default SignIn;
