import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet
,Button,TouchableOpacity,StatusBar,Image,TextInput } from 'react-native';

export default class swipe extends Component{
static navigationOptions= ({navigation}) =>({
		  title: 'New Design',	
	});  
  
	render(){
		const { navigate } = this.props.navigation;
		return(
	  <View style={{backgroundColor:'#ededed', alignItems:'center', height:'100%'}}>	
	
    <Text>Swipe</Text>
	  
	 
      </View>
		);
	}
}
const styles = StyleSheet.create({
	
});


AppRegistry.registerComponent('swipe', () => swipe);
