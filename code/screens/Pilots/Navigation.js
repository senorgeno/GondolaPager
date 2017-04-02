// React
import React from 'react';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { PilotsTab } from './navigationConfig';
// Redux
import { connect } from 'react-redux';
// Icon
import { Icon } from 'react-native-elements';

const mapStateToProps = (state) => {
 return {
  navigationState: state.pilotsTab
  }
}

class PilotsTabNavigation extends React.Component {
  static navigationOptions = {
    tabBar:{
      label: 'Pilots',
      icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <PilotsTab
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

export default connect(mapStateToProps)(PilotsTabNavigation)
