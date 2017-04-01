
// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'

// Navigation
import { NavigatorTabOne } from './screens/auth/config';
import { NavigatorTabTwo } from './screens/Pilot/navigationConfiguration';
// import { NavigatorTabThree } from './tabThree/navigationConfiguration'
import { TabBar, tabBarReducer } from './screens/tabBar/TabBar'

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger())
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,

    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),

    tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),
    
    // tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),
  }),
  middleware(),
)
