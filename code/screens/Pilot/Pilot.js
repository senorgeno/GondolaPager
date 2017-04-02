import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from '../../components/Container';
import { Card } from 'react-native-elements';
import { PrimaryButton } from '../../components/Form';
import styles from '../../styles';
import config from '../../config/config';
import Actions from '../../actions';

const ActiveButton = ({ pilotActive, actions }) => {
  return (
      <PrimaryButton
        title={pilotActive ? 'Set Ground' : 'Set Air'}
        onPress={() => actions.changePilotStatus()}
      />
  )
}

class Pilot extends Component {
  static navigationOptions = {
    title: 'Pilot Status',
  }
  constructor(props) {
	  super(props);

    //set up check flying ping
    this._checkFlyingStatus();
    setInterval(this._checkFlyingStatus, 2000);
  }
  _checkFlyingStatus = () => {
  	fetch(config.AIRSPACE_STATUS_URL)
  	 .then((response) => response.json())
  	  .then((json) => {
    		if(json.Status === 'Down' && this.props.airSpace
          || json.Status === 'OK' && ! this.props.airSpace) {
          this.props.actions.changeAirSpaceStatus();
    		}
  	})
  	.catch((error) => {
  		console.warn(error);
  	});
  }

  render() {
    const { pilotActive, airSpace } = this.props;

    return (
      <Container>
        <Card>
          <Text style={styles.header}>
            GA756 Status: { airSpace ? 'Active' : 'Closed' }
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
    pilotActive:  state.pilotActive,
    airSpace: state.airSpace
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
