import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet
,Button,TouchableOpacity,StatusBar,Image,TextInput } from 'react-native';

export default class design extends Component{
static navigationOptions= ({navigation}) =>({
		  title: 'New Design',	
	});  
  
	render(){
		const { navigate } = this.props.navigation;
		return(
	  <View style={{backgroundColor:'#ededed', alignItems:'center', height:'100%'}}>	
	<View style={{padding:20, backgroundColor:'white',alignItems:'center'}}>
      <Text style={styles.pageName}>Welcome </Text>
		<Image source={{uri:'https://yt3.ggpht.com/-dh5qoeGs5h0/AAAAAAAAAAI/AAAAAAAAAAA/aeZUMryTX1U/s288-c-k-no-mo-rj-c0xffffff/photo.jpg'}}
		style={{width:120,height:120}}
		/>
		 <Text>EasyCode Sardar</Text>
		 
		<View style={{marginTop:20, height:'100%', width:250}}>
		
		<TextInput style={{height:40,borderColor:'gray',borderWidth:1,margin:10}}/>
		 <Button title="Signup" />
		 
		 <Text style={{fontSize:10, margin:10}}>some words about your signup policy or something else you can change as you want </Text>
		 
		</View>
	  </View>
	  
	 
      </View>
		);
	}
}
const styles = StyleSheet.create({
	pageName:{
		margin:10,fontWeight:'bold',
		color:'magenta', textAlign:'center',
		fontSize:28
	},
});


AppRegistry.registerComponent('design', () => design);
