import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet
,Button,TouchableOpacity } from 'react-native';

export default class home extends Component{
	 static navigationOptions = {
		title: 'Welcome',
  };
	render(){
		const { navigate } = this.props.navigation;
		return(
	  <View style={styles.container}>
       <Text style={styles.pageName}>Hello from home</Text>
	   
	   <TouchableOpacity
		style={styles.cat}
		onPress={() => navigate('Products',{cat:'electronics',id:'1'})}>
	   <Text style={styles.btnText}> Electronics > </Text>
	   </TouchableOpacity>
	   
	   <TouchableOpacity
		style={styles.cat}
		onPress={() => navigate('Products',{cat:'automobiles',id:'2'})}>
	   <Text style={styles.btnText}> Automobiles > </Text>
	   </TouchableOpacity>
	   
	    <TouchableOpacity
		 style={styles.cat}
		 onPress={() => navigate('Products',{cat:'Movies',id:'3'})}>
		<Text style={styles.btnText}> Movies > </Text>
	    </TouchableOpacity>
	   
	    <TouchableOpacity
		 style={styles.cat}
		 onPress={() => navigate('Products',{cat:'Books',id:'4'})}>
		<Text style={styles.btnText}> Books > </Text>
	   </TouchableOpacity>
	   
	   
      </View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		display:'flex',alignItems:'center',
		justifyContent:'center'
	},
	cat:{
		backgroundColor:'blue',
		padding:10,margin:10,width:'95%'
	},
	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
	},
	btnText:{
		color:'#fff',fontWeight:'bold'
	}
})
AppRegistry.registerComponent('home', () => home);
