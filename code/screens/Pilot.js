import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';
import { Header } from '../components/Text';
import { PrimaryButton } from '../components/Form';

const ActiveButton = (props) => {
console.log(props);
  if(props.status == 'Ground') {
	return (<PrimaryButton
	 title="Set Air"
	 {...props}
	 />)
  } else {
	 return (<PrimaryButton
  	 title="Set Ground"
	 {...props}
  	 />)
  }

}

class Pilot extends Component {

  constructor(props) {
	  super(props);

	this.state = {
	  pilotStatus: 'Ground',
	  airspace: true,
	};
  }
  changeStatus = () => {
    this.setState({pilotStatus: this.state.pilotStatus === 'Ground' ? 'Air' : 'Ground' });
  };

  render() {
    return (
      <Container>
	    <Text>
			{this.state.pilotStatus}
	  	</Text>
        <ActiveButton status={this.state.pilotStatus} onPress={this.changeStatus} />

      </Container>
    );
  }
}

export default Pilot;
