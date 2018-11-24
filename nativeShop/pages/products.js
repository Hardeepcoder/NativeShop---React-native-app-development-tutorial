import React, { Component } from 'react';
import { AppRegistry,View,Text,
StyleSheet,ListView,Image,StatusBar } from 'react-native';

export default class products extends Component{
			
	static navigationOptions = {
    title: 'Products',	
	};
	
	constructor(){
		super();
		this.state={		
			dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2})
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
		
		<Text style={styles.pageName}>{params.cat}</Text>
		  
	
		<ListView
		dataSource={this.state.dataSource}
		renderRow={(rowData)=>
		
		<View style={styles.productBox}>
		
		<Image
		style={{width:'100%',height:250}}
		source={{uri:rowData.pro_img}}
		/>
		
		<Text style={styles.price}>
		${rowData.pro_price}</Text>
		
		<Text style={styles.proName}>{rowData.pro_name}</Text>
		
		</View>
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
AppRegistry.registerComponent('products', () => products);
