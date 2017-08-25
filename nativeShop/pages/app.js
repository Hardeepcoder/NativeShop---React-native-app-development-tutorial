import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './home';
import Products from './products2';

const nativeShop = StackNavigator({
	Home: { screen: HomeScreen },
   Products: { screen: Products },
});



export default nativeShop;