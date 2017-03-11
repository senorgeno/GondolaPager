import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SignIn from '../screens/SignIn';
//import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';


export const Tabs = TabNavigator({
    SignIn: {
		screen: SignIn,
		navigationOptions: {
			tabBar: {
				label: 'SignIn',
				icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
			}
		}
    },
    Profile: {
		screen: Profile,
		navigationOptions: {
			tabBar: {
				label: 'Profile',
				icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
			}
		}
    }
});
