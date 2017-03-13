import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import Container from '../components/Container';
import { Card } from 'react-native-elements';
import { Input, PrimaryButton, SecondaryButton } from '../components/Form';
import styles from '../styles';
import config from '../config/config';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
			password: '',
			loggedIn: false,
			expire: null,
      loading: false
    };
  }

  _signIn = () => {
    const { username, password } = this.state;
    const { navigate } = this.props.navigation;

    this.setState({ loading: true });

    fetch(config.API_HOST + 'api/auth/login?email=' + username + '&pwd=' + password)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ loading: false });
        if(json.result) {
    				let t = new Date(json.expire);
    				let formatted = t.toISOString();
    				this.setState({
    					loggedIn : true,
    					//expire : formatted,
    				});
            this.props.navigation.navigate('Pilot', { ...this.state });
    			} else {
    				Alert.alert(
            	'Login Failed',
            		'Please try again',
          		);
    			}

      })
      .catch((error) => {
        console.warn(error);
      });

  }
  _signOut = () => {
    this.setState({
      username: '',
      password: '',
      loggedIn: false,
      expire: null,
      pilotStatus: 'Ground',
    });
  }
  render () {
		if (this.state.loggedIn) {
			return this.renderStatusScreen();
		}
		return this.renderLogin();
	}
  renderLogin() {
    return (
      <Container scroll>
        <Card>
          <Input
            label="Email or PIN"
            placeholder="Please enter your email or PIN..."
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          />
          <Input
            label="Password"
            placeholder="Please enter your password..."
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          <PrimaryButton
            title="Sign In"
            onPress={this._signIn}
            loading={this.state.loading}
          />
        </Card>
      </Container>
    );
  }
  renderStatusScreen() {
    return (
      <Container scroll>
        <Card>
          <Text>You are signed in</Text>
        </Card>
        <SecondaryButton
          title="Sign Out"
          onPress={this._signOut}
        />
      </Container>
    );
  }
}

export default SignIn;
