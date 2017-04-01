import { TabNavigator } from 'react-navigation';
// Tab-Navigators
import TabOneNavigation from '../auth/navigation';
import TabTwoNavigation from '../Pilot/Navigation';
// import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'


const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
  TabTwoNavigation: { screen: TabTwoNavigation },
  // TabThreeNavigation: { screen: TabThreeNavigation },
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
