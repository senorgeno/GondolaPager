import React, { Component } from 'react';
import { Alert, Text, StyleSheet, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from '../../components/Container';
import { Card } from 'react-native-elements';
import { Input, PrimaryButton, SecondaryButton } from '../../components/Form';
import { NavigationActions } from 'react-navigation';

import config from '../../config/config';
import Actions from '../../actions';

class SignIn extends Component  {
  static navigationOptions = {
    title: 'Login',
  }
  constructor(props) {
    super(props);

      this.state = {
        username: '',
  			password: '',
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
            this.props.actions.logInUser();
            this.props.navigation.navigate('Pilot');
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
    this.props.actions.logOutUser()
  }
  render () {
		if (this.props.loggedIn) {
			return this.renderStatusScreen();
		}
		return this.renderLogin();
	}
  renderStatusScreen() {
    return (
      <Container scroll>
        <Card>
          <Text onPress={() => this.props.navigation.navigate('Pilot')}>
            You are signed in. Click here to change pilot status.
          </Text>
        </Card>
        <SecondaryButton
          title="Sign Out"
          onPress={this._signOut}
        />
      </Container>
    );
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
    )
  }

}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
