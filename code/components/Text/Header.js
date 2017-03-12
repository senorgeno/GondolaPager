import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Header = (props) => (
  <Text style={styles.header}>{props.children}</Text>
);
console.log(Header);
Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
