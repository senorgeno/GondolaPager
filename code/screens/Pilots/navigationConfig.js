import { StackNavigator } from 'react-navigation';

//auth screen
import Pilots from './Pilots';

const routeConfiguration = {
  Pilots: { screen: Pilots },
}

const stackNavigatorConfiguration = {
  initialRoute: 'Pilots'
}

export const PilotsTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
