import { StackNavigator } from 'react-navigation';

//auth screen
import Pilots from './Pilots';

const routeConfiguration = {
  TabThreeScreenOne: { screen: Pilots },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRoute: 'TabThreeScreenOne'
}

export const NavigatorTabThree = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
