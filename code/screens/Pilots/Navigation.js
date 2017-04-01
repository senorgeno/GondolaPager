// React
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabThree } from './navigationConfig';

// Redux
import { connect } from 'react-redux';

// Icon
import { Icon } from 'react-native-elements';


const mapStateToProps = (state) => {
 return {
  navigationState: state.tabThree
  }
}

class TabThreeNavigation extends React.Component {
  static navigationOptions = {
    tabBar:{
      label: 'Pilots',
      icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTabThree
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

export default connect(mapStateToProps)(TabThreeNavigation)
