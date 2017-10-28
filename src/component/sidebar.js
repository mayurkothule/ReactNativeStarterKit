import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import { DrawerItems,NavigationActions } from 'react-navigation';

export default class Sidebar extends Component {

  constructor(){
    super();
    this.state={
      
    };
  }

  componentWillMount(){

  }

  componentDidMount(){
    
  }

  routeToLogin(){
    //here make router stack empty so on back login will not open again
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Login' }),
        ]
      });
      this.props.navigation.dispatch(resetAction);
  }

  onPressLogout(){

  }



  render(){
    return(

      <View style={styles.container}>
        <View style={styles.links}>
          <TouchableOpacity onPress={ this.onPressLogout.bind(this) } >
          <View style={styles.link}>
            <Text style={styles.text}>Logout</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(95,177,95)'
  },
  header:{
  	flexDirection:'row',
  	justifyContent:'flex-start',
  	alignItems:'center'
  },
  links:{

  },
  link:{
    flexDirection:'row',
    justifyContent:'flex-start',
  	borderTopWidth:1,
  	borderTopColor:'rgba(255,255,255,0.25)'
  }
});

