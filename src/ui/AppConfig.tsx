/**
 * AppConfig.ts
 * - Stores top level routes in program
 * Notes:
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import React from "react";

import { View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from "react-navigation-stack";
import History from "./pages/History";
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import Updates from "./pages/Updates";
import Browse from "./pages/browse/Browse";

/******* SUB ROUTES *******/
const BrowseSubRoute = createStackNavigator({
	Browse,
}, {
	initialRouteName: "Browse",
	headerMode: "none",
});

const LibrarySubRoute = createStackNavigator({
	Library,
}, {
	initialRouteName: "Library",
	headerMode: "none", // ignore linter
});

/******* TOP LEVEL ROUTES *******/
const AppRoutes = {
	Library: {
		screen: Library,
		name: 'Library',
		navigationOptions: {
			tabBarIcon:  ({ tintColor }: any) => (
				<View>
					<Ionicons style={[{color: tintColor}]} size={25} name={'md-book'}/>
				</View>
			),
		},
	},
	Updates: {
		screen: Updates,
		name: 'Updates',
		navigationOptions: {
			tabBarIcon:  ({ tintColor }: any) => (
				<View>
					<MaterialIcon style={[{color: tintColor}]} size={25} name={'update'}/>
				</View>
			),
		},
	},
	History: {
		screen: History,
		name: 'History',
		navigationOptions: {
			tabBarIcon:  ({ tintColor }: any) => (
				<View>
					<MaterialIcon style={[{color: tintColor}]} size={25} name={'hourglass-empty'}/>
				</View>
			),
		},
	},
	Browse: {
		screen: Browse,
		name: 'Browse',
		navigationOptions: {
			tabBarIcon:  ({ tintColor }: any) => (
				<View>
					<Ionicons style={[{color: tintColor}]} size={25} name={'md-compass'}/>
				</View>
			),
		},
	},
	Settings: {
		screen: Settings,
		name: 'Settings',
		navigationOptions: {
			tabBarIcon:  ({ tintColor }: any) => (
				<View>
					<MaterialIcon style={[{color: tintColor}]} size={25} name={'settings'}/>
				</View>
			),
		},
	},
};

/* configure tab bar style | behavior | etc */
const AppConfig: any =  {
	initialRouteName: "Library",
	backBehavior: 'initialRoute',
	headerMode: "none",
	activeColor: '#ff6b87', // pink
	inactiveColor: '#6d6d6d', // grey
	barStyle: { backgroundColor: '#f9f9f9' },
};

/* create navigator */
const AppNavigator = createMaterialBottomTabNavigator({
	...AppRoutes,
},
	AppConfig,
);

export {
	AppNavigator,
};
