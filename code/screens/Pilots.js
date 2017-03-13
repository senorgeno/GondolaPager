import React, { Component } from 'react';
import Container from '../components/Container';
import { List, ListItem } from 'react-native-elements';
import config from '../config/config';



class Pilots extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pilots: [],
    };
    fetch(config.PILOTS_URL)
    	.then((response) => response.json())
    	.then((json) => {
    		this.setState({
          pilots: json
        });
  	});
  }
  pilotName = (pilot) => {
    return `${pilot.FirstName} ${pilot.Surname}`
  }
  render() {
    return (
      <Container scroll>
        <List>
          {
              this.state.pilots.map((p) => (
                <ListItem
                  key={p.ID}
                  title={this.pilotName(p)}
                  hideChevron={true}
                  //subtitle={this.subTitle(p)}
                />
              ))
          }
        </List>

      </Container>
    );
  }
}

export default Pilots;
