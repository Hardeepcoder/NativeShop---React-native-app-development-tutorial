import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { StackNavigator,DrawerNavigator  } from 'react-navigation';

import HomeScreen from './home';
import Products from './products2';
import Menu from  './menu';
import Details from './details';
import Swipe from './swipe';

const myDrawer = DrawerNavigator({
	Home: { screen: HomeScreen },
	Products: { screen: Products },
	Details: {screen: Details},
	Swipe: {screen: Swipe}

},
{
	contentComponent: props => <Menu {...props} />
});

const nativeShop = StackNavigator({
	Home: { screen: myDrawer },

 });
export default nativeShop;
