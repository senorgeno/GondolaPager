import { StackNavigator } from 'react-navigation';

//auth screen
import SignIn from './SignIn';

const routeConfiguration = {
  TabOneScreenOne: { screen: SignIn },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRoute: 'TabOneScreenOne'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
