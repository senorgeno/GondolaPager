
// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'

// Navigation
import { PilotTab } from './screens/Pilot/navigationConfig';
import { PilotsTab } from './screens/Pilots/navigationConfig';
import { TabBar, tabBarReducer } from './screens/TabBar/TabBar';

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger())
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,

    pilotTab: (state,action) => PilotTab.router.getStateForAction(action,state),

    pilotsTab: (state,action) => PilotsTab.router.getStateForAction(action,state),

    pilotActive: (state = false, action) => {
      if(action.type === 'PILOT_STATUS') {
          return ! state;
      }
      return state;
    },

    airSpace: (state = true, action) => {
      if(action.type === 'AIR_SPACE_STATUS') {
          return ! state;
      }
      return state;
    },
    loggedIn: (state = false, action) => {
      if(action.type === 'LOG_IN_USER') {
          return true;
      }
      if(action.type === 'LOG_OUT_USER') {
          return false;
      }
      return state;
    },

  }),
  middleware(),
)
