// React
import React from 'react';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabTwo } from './navigationConfiguration';
//Redux
import { connect } from 'react-redux';
// Icon
import { Icon } from 'react-native-elements';

const mapStateToProps = (state) => {
 return {
   navigationState: state.tabTwo
 }
}

class TabTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Pilots',
      icon: ({ tintColor }) => <Icon name="airplanemode-active" size={35} color={tintColor} />
    }
  }

render(){
    const { dispatch, navigationState} = this.props
    return (
      <NavigatorTabTwo
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

export default connect(mapStateToProps)(TabTwoNavigation)
