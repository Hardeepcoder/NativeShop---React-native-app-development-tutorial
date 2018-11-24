import React, { Component } from 'react';
import { AppRegistry,View,Text,
StyleSheet,FlatList,Image,StatusBar,
TouchableOpacity,Button, RefreshControl } from 'react-native';

export default class details extends Component{
	static navigationOptions= ({navigation}) =>({
		  title: 'Products',
		headerRight:<TouchableOpacity onPress={() => navigation.navigate("Home")}
		style={{backgroundColor:'orange', margin:10,padding:10}}>
		<Text style={{color:'#fff'}}>Home</Text></TouchableOpacity>
		});


	state={
		data:[],
		refreshing: false

	};
	fetchData = async() =>{
		const { params } = this.props.navigation.state;
		const response =  await fetch('https://hardeepwork.000webhostapp.com/laravel/LaraShop55/api/products/' + params.id);
		const products = await response.json(); // products have array data
		this.setState({data: products}); // filled data with dynamic array
	};
	componentDidMount(){
		this.fetchData();
	};
	_onRefresh(){
		this.setState({refreshing: true});
		this.fetchData().then(() =>{
			this.setState({refreshing: false})
		});
	}

	render(){

		 const { params } = this.props.navigation.state;
		 const {navigate} = this.props.navigation;

		return(
		 <View style={styles.container}>

		  <FlatList
		  data={this.state.data}
		  keyExtractor={(x,i) => i}
		  renderItem={({item})=>
		  <View style={styles.productBox}>
		  <Image style={{height:250, width:'100%'}} source={{uri:
				'https://hardeepwork.000webhostapp.com/laravel/LaraShop55//public/img/' +item.pro_img}} />
		   <Text style={styles.price}>${item.pro_price}</Text>
		  <Text style={styles.proName}>{item.pro_name}</Text>
		  <Text>{item.pro_info}</Text>
		  <Text> Spl Price {item.spl_price} </Text>
		  </View>
		  }
		  refreshControl={
			  <RefreshControl
			  refreshing = {this.state.refreshing}
			  onRefresh={this._onRefresh.bind(this)}
			  />
		  }
		   />
		</View>
		);
	}



}
const styles = StyleSheet.create({
	container:{
		 flex: 1,
        flexDirection: 'column',
		justifyContent: 'center',

	},
	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
	},
	productBox:{
		padding:5,margin:10,borderColor:'orange',borderBottomWidth:1
	},
	price:{
		padding:5, color:'orange',fontWeight:'bold',textAlign:'center'
	},
	proName:{
		padding:5,color:'blue',textAlign:'center'
	}
})
AppRegistry.registerComponent('details', () => details);
