import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet } from 'react-native';

export default class products extends Component{
	 static navigationOptions = {
    title: 'Products',
  };
	render(){
		 const { params } = this.props.navigation.state;
		return(
		 <View >
       <Text>hello from products</Text>
	   <Text style={{color:'#000',fontWeight:'bold'}}>{params.cat}</Text>
      </View>
		);
	}
}
const styles = StyleSheet.create({
	
})
AppRegistry.registerComponent('products', () => products);
