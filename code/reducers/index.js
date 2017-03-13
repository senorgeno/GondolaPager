import { combineReducers } from 'redux';
import { Tabs } from './config/router';

const AppReducer = combineReducers({
  nav: (state = initialNavState, action) => {
    if (action.type === 'Login') {
      return Tabs.router.getStateForAction(NavigationActions.back(), state);
    }
    if (action.type === 'Logout') {
      return Tabs.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state);
    }
    return Tabs.router.getStateForAction(action, state);
  },
  auth: (state = initialAuthState, action) => {
    if (action.type === 'Login') {
      return { ...state, isLoggedIn: true };
    }
    if (action.type === 'Logout') {
      return { ...state, isLoggedIn: false };
    }
    return state;
  },
});


export default AppReducer;
