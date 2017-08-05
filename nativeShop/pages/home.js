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
		 <View style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
       <Text style={{margin:10,fontWeight:'bold',color:'#000'}}>Hello from home</Text>
	   
	    <TouchableOpacity
	 style={styles.cat}
	  onPress={() => navigate('Products', {cat:'electronics'})}
	   ><Text Text style={{color:'#fff'}}>Electronics ></Text>
	   </TouchableOpacity>
	   
	    <TouchableOpacity
	 style={styles.cat}
	  onPress={() => navigate('Products', {cat:'automobiles'})}
	   ><Text Text style={{color:'#fff'}}>Automobiles ></Text>
	   </TouchableOpacity>
	   
	    <TouchableOpacity
	 style={styles.cat}
	  onPress={() => navigate('Products', {cat:'Movies'})}
	   ><Text Text style={{color:'#fff'}}>Movies ></Text>
	   </TouchableOpacity>
	   
	    <TouchableOpacity
	 style={styles.cat}
	  onPress={() => navigate('Products', {cat:'Books'})}
	   ><Text Text style={{color:'#fff'}}>Books ></Text>
	   </TouchableOpacity>
	   
      </View>
		);
	}
}
const styles = StyleSheet.create({
	cat:{
		backgroundColor:'blue',
		padding:10,margin:10,width:'95%'
	}
})
AppRegistry.registerComponent('home', () => home);
