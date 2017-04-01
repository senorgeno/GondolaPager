import { StackNavigator } from 'react-navigation';

// Screens
import Pilot from './Pilot';

const routeConfiguration = {
  TabTwoScreenOne: { screen: Pilot },
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  //headerMode: 'none',
  initialRoute: 'TabTwoScreenOne'
}

export const NavigatorTabTwo = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
