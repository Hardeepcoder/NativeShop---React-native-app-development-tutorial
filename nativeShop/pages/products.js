import React, { Component } from 'react';
import { AppRegistry,View,Text,
StyleSheet,ListView,Image } from 'react-native';

export default class products extends Component{
			
	static navigationOptions = {
    title: 'Products',
	};
	
	constructor(){
		super();

		this.state={
		
			dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2}),
		//link: 'http://hardeepcoder.com/laravel/easyshop/api/products/' + params.id,
		}
			
		
	}
	componentDidMount(){
		 const { params } = this.props.navigation.state;
		fetch('http://hardeepcoder.com/laravel/easyshop/api/products/' + params.id)
		.then((response) => response.json())
		.then((responseJson) =>{
			data = responseJson; // here we have all products data
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(data)
			})
		})
		.catch((error) =>{
			console.error(error);
		});
		
	}
		
	render(){
		 const { params } = this.props.navigation.state;
		return(
		 <View style={styles.container}>	
		 
		   <Text style={styles.pageName}>Hello from Products</Text>
		   <Text> Category Name: {params.cat}  Category id: {params.id}</Text>

	
		<ListView
		dataSource={this.state.dataSource}
		renderRow={(rowData)=>
		
		<View style={{padding:10,margin:10}}>
		<Text style={{fontWeight:'bold',textAlign:'center'}}>{rowData.pro_name}</Text>
		
		<Image
		style={{width:'100%',height:250}}
		source={{uri:rowData.pro_img}}
		/>
		<Text>Price: {rowData.pro_price}</Text>
		
		</View>
		}
		/>
		</View>
			
		);
	}
	
		
	
}
const styles = StyleSheet.create({
	container:{
		display:'flex'
	},
	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
	}
})
AppRegistry.registerComponent('products', () => products);
