// React
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabOne } from './navigationConfig';

// Redux
import { connect } from 'react-redux';

// Icon
import { Icon } from 'react-native-elements';


const mapStateToProps = (state) => {
 return {
  navigationState: state.tabOne
  }
}

class TabOneNavigation extends React.Component {
  static navigationOptions = {
    tabBar:{
      label: 'Sign In',
      icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    }
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabOne
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabOneNavigation)
