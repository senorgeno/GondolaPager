import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

// Navigation
import TabBarNavigation from './screens/tabBar/TabBarNavigation';

export default class App extends React.Component {

  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
}

//@TODO export reducers
// const AppReducer = combineReducers({
//   nav: (state = initialNavState, action) => {
//     if (action.type === 'LOG_IN_USER') {
//       return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Pilot' }), state);
//     }
//     if (action.type === 'LOG_OUT_USER') {
//       return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'SignIn' }), state);
//     }
//     //console.log(action);
//     return AppNavigator.router.getStateForAction(action, state);
//   },
//   auth: (state = initialAuthState, action) => {
//     if (action.type === 'LOG_IN_USER') {
//       return { ...state, isLoggedIn: true };
//     }
//     if (action.type === 'LOG_OUT_USER') {
//       return { ...state, isLoggedIn: false };
//     }
//     return state;
//   },
//   airspace: (state = initialAirSpaceState, action) => {
//     if(action.type === 'PILOT_STATUS') {
//         return { ...state, pilotActive: ! state.pilotActive };
//     }
//     return state;
//   },
// });

// Middleware
// const middleware = () => {
//   return applyMiddleware(createLogger())
// }
//
// class App extends React.Component {
//
//   constructor(props) {
//     super(props);
//   }
//   store = createStore(
//     combineReducers({
//       tabBar: tabBarReducer,
//       tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),
//
//       // tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),
//       //
//       // tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),
//     }),
//     middleware(),
//   );
//   //store = createStore(AppReducer, undefined, autoRehydrate());
//
//   // componentDidMount() {
//   //   persistStore(this.store, { storage: AsyncStorage });
//   // }
//
//   render() {
//     return (
//       <Provider store={this.store}>
//         <TabBarNavigation />
//       </Provider>
//     );
//   }
// }
//
// export default App;
