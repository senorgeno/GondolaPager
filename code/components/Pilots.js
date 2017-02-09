/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var REQUEST_URL = 'http://gondola.genedower.com/api/Member?Status=Ground';

export default class Pilots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
      this.fetchData();
  }

fetchData() {
    fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {

            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData),
              loaded: true,
            });
        })
        .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderPilot}
            style={styles.listView}
            enableEmptySections={true}
        />
    );
  }

  renderLoadingView() {
    return (
      <View>
        <Text>
          Loading pilots...
        </Text>
      </View>
    );
  }

  renderPilot(pilot) {
    return (
        <View>
            <Text>{pilot.FirstName} {pilot.Surname}</Text>
        </View>
    );
  }
}

var styles = StyleSheet.create({

  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  heading: {
      fontSize: 40,
      color: 'red',
      marginBottom: 50
  },
});
