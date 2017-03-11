import React, { Component } from 'react';
import Container from '../components/Container';
import { Card } from 'react-native-elements';
import { Input, PrimaryButton, SecondaryButton } from '../components/Form';
//import Meteor from 'react-native-meteor';
import Router from '../config/router';
import config from '../config/config';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailOrUsername: '',
      password: '',
    };
  }

  static route = {
    navigationBar: {
      visible: true,
      title: 'Sign In',
    },
  }

  goToSignUp = () => {
    this.props.navigator.push(Router.getRoute('signUp'));
  };

  signIn = () => {
    // const { emailOrUsername, password } = this.state;
    //
    // if (emailOrUsername.length === 0) {
    //   return this.props.navigator.showLocalAlert('Email or username is required.', config.errorStyles);
    // }
    //
    // if (password.length === 0) {
    //   return this.props.navigator.showLocalAlert('Password is required.', config.errorStyles);
    // }
    //
    //
    // this.setState({ loading: true });
    // return Meteor.loginWithPassword(emailOrUsername, password, (err) => {
    //   this.setState({ loading: false });
    //   if (err) {
    //     this.props.navigator.showLocalAlert(err.reason, config.errorStyles);
    //   } else {
    //     this.props.navigator.immediatelyResetStack([Router.getRoute('profile')]);
    //   }
    // });
  };

  render() {
    return (
      <Container scroll>
        <Card>
          <Input
            label="Email or Username"
            placeholder="Please enter your email or username..."
            keyboardType="email-address"
            onChangeText={(emailOrUsername) => this.setState({ emailOrUsername })}
            value={this.state.emailOrUsername}
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
            onPress={this.signIn}
            loading={this.state.loading}
          />
        </Card>
        <SecondaryButton
          title="Sign Up"
          onPress={this.goToSignUp}
        />
      </Container>
    );
  }
}

export default SignIn;
