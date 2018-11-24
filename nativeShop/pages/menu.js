import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet
,Button,TouchableOpacity,StatusBar,Image } from 'react-native';

export default class menu extends Component{
static navigationOptions= ({navigation}) =>({
		  title: 'Side Menu',
	});

  static Cards = [

    {
      imageUrl: 'https://images.unsplash.com/photo-1501850305723-0bf18f354fea?w=500',
      title: 'React Native Developer',
      subtitle: 'San Francisco',
      buttonText: 'Learn More'
    },
	
	{
      imageUrl: 'https://images.unsplash.com/photo-1501850305723-0bf18f354fea?w=500',
      title: 'React Native Developer',
      subtitle: 'San Francisco',
      buttonText: 'Learn More'
    },

  ];

	render(){
		const { navigate } = this.props.navigation;
		return(
	  <View >

      <Text style={styles.pageName}>Menu </Text>

	    <TouchableOpacity
		style={styles.cat}
		onPress={() => navigate('Products',{cat:'Electronics',id:'1'})}>
	   <Text style={styles.btnText}> Electronics > </Text>
	   </TouchableOpacity>
	   <TouchableOpacity
		style={styles.cat}
		onPress={() => navigate('Products',{cat:'Automobiles',id:'2'})}>
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


	  <Button
	  onPress={() => navigate('Swipe')}
	  color="red"
	  title="Swipe"
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
	cat:{
		backgroundColor:'orange',
		padding:10,margin:10,width:'95%'
	},
	cat2:{
		backgroundColor:'blue',
		padding:10,margin:10,width:'95%'
	},
	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
	},
	btnText:{
		color:'#fff',fontWeight:'bold'
	},
	 icon: {
    width: 24,
    height: 24,
  },
});


AppRegistry.registerComponent('menu', () => menu);
