import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

// Navigation
import TabBarNavigation from './screens/TabBar/TabBarNavigation';

export default class App extends React.Component {

  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
}
