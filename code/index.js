import React from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  NavigationActions,
  addNavigationHelpers,
  StackNavigator,
} from 'react-navigation';
import {
  Provider,
  connect,
} from 'react-redux';
import {
  createStore,
  combineReducers,
} from 'redux';
import {
  persistStore,
  autoRehydrate,
} from 'redux-persist';
import { AppNavigator } from './config/router';

const AppWithNavigationState = connect(state => ({
  nav: state.nav,
}))(({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

const initialNavState = {
  index: 1,
  routes: [
    { key: 'InitA', routeName: 'Main' },
    { key: 'InitB', routeName: 'Pilot' },
  ],
};

const initialAuthState = {
  isLoggedIn: false,
};

const initialAirSpaceState = {
  pilotActive: false,
};

const AppReducer = combineReducers({
  nav: (state = initialNavState, action) => {
    if (action.type === 'Login') {
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Pilot' }), state);
    }
    if (action.type === 'Logout') {
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Main' }), state);
    }
    return AppNavigator.router.getStateForAction(action, state);
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
  airspace: (state = initialAirSpaceState, action) => {
    if(action.type === 'Air' || action.type === 'Ground') {
        return { ...state, pilotActive: ! state.pilotActive };
    }
    return state;
  },
});

class App extends React.Component {
  store = createStore(AppReducer, undefined, autoRehydrate());

  componentDidMount() {
    persistStore(this.store, { storage: AsyncStorage });
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
