/**
 * AppConfig.ts
 * - Stores top level routes in program
 * Notes:
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import React from "react";

import { View } from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Browse from "./pages/Browse";
import History from "./pages/History";
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import Updates from "./pages/Updates";

/* configure tab bar routes */
const AppRoutes = {
	Library: {
		screen: Library,
		name: 'Library',
		navigationOptions: {
			tabBarIcon:  ({ tintColor }: any) => (
				<View>
					<MaterialIcon style={[{color: tintColor}]} size={25} name={'book'}/>
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
					<MaterialIcon style={[{color: tintColor}]} size={25} name={'new-releases'}/>
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
					<MaterialIcon style={[{color: tintColor}]} size={25} name={'history'}/>
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
					<MaterialIcon style={[{color: tintColor}]} size={25} name={'search'}/>
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
	activeColor: '#ff6b87',
	inactiveColor: '#fff',
	barStyle: { backgroundColor: '#0038a8' },
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
