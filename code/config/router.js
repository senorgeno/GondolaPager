import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SignIn from '../screens/SignIn';
import Pilot from '../screens/Pilot';
import Pilots from '../screens/Pilots';

const SignInStack = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In'
    }
  }
});

const PilotsStack = StackNavigator({
  Pilots: {
    screen: Pilots,
    navigationOptions: {
      title: 'Pilots'
    }
  }
});

export const Tabs = TabNavigator({
    SignIn: {
  		screen: SignInStack,
  		navigationOptions: {
  			tabBar: {
  				label: 'SignIn',
  				icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
  			}
  		}
    },
    Pilot: {
  		screen: Pilot,
  		navigationOptions: {
  	    tabBar: {
  	      label: 'Pilot',
  			  icon: ({ tintColor }) => <Icon name="airplanemode-active" size={35} color={tintColor} />
  			}
  		}
    },
    Pilots: {
      screen: PilotsStack,
      navigationOptions: {
  	    tabBar: {
  	      label: 'Pilots',
  			  icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
  			}
  		}
    }
});
