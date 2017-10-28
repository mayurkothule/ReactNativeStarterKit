
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './home';
import Sidebar from './sidebar';
import {
  DrawerNavigator,
} from 'react-navigation';

export default Drawer = DrawerNavigator({
	 Home: { screen: Home }
},{
	 navigationOptions:{tintColor:'#ffffff'},
	 contentComponent: (props) => <Sidebar {...props} />
})