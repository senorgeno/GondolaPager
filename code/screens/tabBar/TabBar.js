import { TabNavigator } from 'react-navigation';
// Tab-Navigators
import PilotTabNavigation from '../Pilot/Navigation';
import PilotsTabNavigation from '../Pilots/Navigation';


const routeConfiguration = {
  PilotTabNavigation: { screen: PilotTabNavigation },
  PilotsTabNavigation: { screen: PilotsTabNavigation },
}

//other settings for tab bar
const tabBarConfiguration = {
  tabBarOptions:{}
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}
