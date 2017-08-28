import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet
,Button,TouchableOpacity,StatusBar,Image } from 'react-native';

export default class menu extends Component{
static navigationOptions= ({navigation}) =>({
		  title: 'Side Menu',	
	});  
  
	render(){
		const { navigate } = this.props.navigation;
		return(
	  <View >	
   
      <Text style={styles.pageName}>Menu </Text>
	  <Button
	  onPress={() => navigate('Products',{cat:'Electronics',id:'1'})}
	  color="orange"
	  title="Electronics"
	  />
	  
	    <Button
	  onPress={() => navigate('Products',{cat:'Books',id:'4'})}
	  color="red"
	  title="Books"
	  />
      </View>
		);
	}
}
const styles = StyleSheet.create({
	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
	},
});


AppRegistry.registerComponent('menu', () => menu);
