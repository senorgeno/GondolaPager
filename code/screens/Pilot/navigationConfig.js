import { StackNavigator } from 'react-navigation';

import Pilot from './Pilot';
import SignIn from './SignIn';

const routeConfiguration = {
  SignIn: { screen: SignIn },
  Pilot: { screen: Pilot },
}

const stackNavigatorConfiguration = {
  initialRoute: 'Pilot'
}

export const PilotTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
