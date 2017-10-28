
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './component/home';
import Drawer from './component/drawer';

const RootNavigator = StackNavigator({
  Home: { screen: Drawer }
},
{ 
    headerMode: 'screen' , 
    navigationOptions:{headerStyle: {backgroundColor:'#51a34d'},
    headerTintColor:'#ffffff'}
});

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}
