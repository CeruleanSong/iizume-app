/**
 * AppConfig.ts
 * - Stores top level routes in program
 * Notes:
 * - Ignore headermode error by linter
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import React from "react";

import { NavigationTabRouterConfig } from 'react-navigation';
import Gallery from "./pages/Gallery";
import History from './pages/History';
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import Updates from './pages/Updates';
import Browse from './pages/browse/Browse';
import BrowseSource from './pages/browse/BrowseSource';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

const BrowseRoutes = createStackNavigator({
	Browse,
	BrowseSource,
}, {
	initialRouteName: "Browse",
	headerMode: "none", // ignore linter
});

const LibraryRoutes = createStackNavigator({
	Library,
	Gallery,
}, {
	initialRouteName: "Library",
	headerMode: "none", // ignore linter
});

const SettingsRoutes = createStackNavigator({
	Settings,
}, {
	initialRouteName: "Settings",
	headerMode: "none", // ignore linter
});

/**
 * Top level routes for application
 */
const AppRoutes = {
	/* Initial route of program, shows manga saved by user */
	Library: LibraryRoutes,
	/* Latest updates of saved manga */
	Updates: {
		name: "Updates",
		screen: Updates,
	},
	/* Recently read manga */
	History: {
		name: "History",
		screen: History,
	},
	Browse: BrowseRoutes,
	/* Application settings */
	Settings: SettingsRoutes,
};

/**
 * Configuration for top level route
 */
const AppConfig: any =  {
	initialRouteName: "Library",
	backBehavior: 'initialRoute',
	headerMode: "none", // ignore linter
	defaultNavigationOptions: ({ navigation }: any) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }: any) => {
			const { routeName } = navigation.state;
			switch (routeName){
				case "Library":
					return <MaterialIcon name={"book"} size={25} color={tintColor} />;
				case "Updates":
					return <MaterialIcon name={"new-releases"} size={25} color={tintColor} />;
				case "History":
					return <MaterialIcon name={"history"} size={25} color={tintColor} />;
				case "Browse":
					return <MaterialIcon name={"search"} size={25} color={tintColor} />;
				case "Settings":
					return <MaterialIcon name={"settings"} size={25} color={tintColor} />;
			}
		} }),
	tabBarOptions: {
		activeTintColor: '#e05c74',
		inactiveTintColor: '#d4d4d4',
		activeBackgroundColor: "#363636",
		inactiveBackgroundColor: "#363636",
	},
};

const AppNav = createBottomTabNavigator({
	...AppRoutes,
	Browse: BrowseRoutes,
}, AppConfig);

export {
	AppConfig,
	AppRoutes,
	AppNav,
};