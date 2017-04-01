
// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'

// Navigation
import { NavigatorTabOne } from './screens/SignIn/navigationConfig';
import { NavigatorTabTwo } from './screens/Pilot/navigationConfig';
import { NavigatorTabThree } from './screens/Pilots/navigationConfig';
import { TabBar, tabBarReducer } from './screens/TabBar/TabBar';

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger())
}

const initialPilotState = {
  pilotActive: false
}
const initialAirSpaceState = {
  airSpace: true,
};

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,

    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),

    tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),

    tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),

    pilotActive: (state = initialPilotState, action) => {
      if(action.type === 'PILOT_STATUS') {
          return { ...state, pilotActive: ! state.pilotActive };
      }
      return state;
    },

    airSpace: (state = initialAirSpaceState, action) => {
      if(action.type === 'AIR_SPACE_STATUS') {
          return { ...state, airSpace: ! state.airSpace };
      }
      return state;
    },

  }),
  middleware(),
)
