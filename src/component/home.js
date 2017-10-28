import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

export default class Home extends React.Component{

	static navigationOptions = ({ navigation }) => ({
     statusBarStyle: 'dark-content',
     headerTitle:'Home',
      headerLeft:<TouchableOpacity onPress={()=>navigation.navigate('DrawerOpen')}>
	    				    <Text style={{'color':'blue'}}>SideBar</Text>
	    		       </TouchableOpacity>
  });

	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return(
			<View style={styles.container}>
				<Text>Welecome To Home Page</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});