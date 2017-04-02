// React
import React from 'react';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { PilotTab } from './navigationConfig';
//Redux
import { connect } from 'react-redux';
// Icon
import { Icon } from 'react-native-elements';

const mapStateToProps = (state) => {
 return {
   navigationState: state.pilotTab
 }
}

class PilotTabNavigation extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Status',
      icon: ({ tintColor }) => <Icon name="airplanemode-active" size={35} color={tintColor} />
    }
  }

render(){
    const { dispatch, navigationState} = this.props
    return (
      <PilotTab
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

export default connect(mapStateToProps)(PilotTabNavigation)
