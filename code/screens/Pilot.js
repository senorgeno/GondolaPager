import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from '../components/Container';
import { Card } from 'react-native-elements';
import { PrimaryButton } from '../components/Form';
import styles from '../styles';
import config from '../config/config';
import Actions from '../actions';

const ActiveButton = ({ airspace, actions }) => {
  return (
      <PrimaryButton
        title={airspace.pilotActive ? 'Set Ground' : 'Set Air'}
        onPress={() => actions.changePilotStatus()}
      />
  )
}

class Pilot extends Component {
    render() {
      const { pilotActive, airspace } = this.props.airspace;
      //console.log(this.props);
      return (
        <Container>
          <Card>
            <Text style={styles.header}>
              GA756 Status: { airspace ? 'Active' : 'Closed' }
      	  	</Text>
          </Card>
  	      <Text style={styles.header}>
    		    Pilot Status: { pilotActive ? 'In Air' : 'On Ground' }
    	  	</Text>
          <ActiveButton {...this.props} />
        </Container>
      );
    }
}

function mapStateToProps(state) {
  return {
    airspace: {
      pilotActive: state.airspace.pilotActive
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pilot);

// class Pilot extends Component {
//
//   constructor(props) {
// 	  super(props);
//
//     //set up check flying ping
//     this._checkFlyingStatus();
//     setInterval(this._checkFlyingStatus, 2000);
//   }
//   changeStatus = () => {
//     this.setState({pilotStatus: this.state.pilotStatus === 'Ground' ? 'Air' : 'Ground' });
//   };
//
//   _checkFlyingStatus = () => {
//   	let that = this;
//
//   	fetch(config.AIRSPACE_STATUS_URL)
//   	.then((response) => response.json())
//   	.then((json) => {
//
//   		if(json.Status === 'Down') {
//   			that.setState({airspace : false});
//   			//this._sendAlert();
//   		} else {
//   			that.setState({airspace : true});
//   	  }
//   	})
//   	.catch((error) => {
//   		console.warn(error);
//   	});
//   }
//   _airSpaceStatus = () => {
//     return this.state.airspace === true ? 'Open' : 'Closed';
//   }
//   render() {
//
//     return (
//       <Container>
//         <Card>
//           <Text style={styles.header}>
//     		    GA756 Status: {this._airSpaceStatus()}
//     	  	</Text>
//         </Card>
// 	      <Text style={styles.header}>
//   		    Pilot Status: {this.state.pilotStatus}
//   	  	</Text>
//
//         <ActiveButton status={this.state.pilotStatus} onPress={this.changeStatus} />
//
//       </Container>
//     );
//   }
// }
