/**
 * AppContainer.ts
 * - Root component & root ui actions
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { AppConfig, AppRoutes } from "./AppConfig";

import Browse from './pages/browse/Browse';
import BrowseSource from './pages/browse/BrowseSource';

/**
 * Create a stack navigator
 */
const AppNavigator = () => {
	const BrowseNav = createStackNavigator({
		Browse,
		BrowseSource,
	}, {
		initialRouteName: "Browse",
		headerMode: "none", // ignore linter
	});

	const TabNav = createBottomTabNavigator({
		...AppRoutes,
		Browse: BrowseNav,
	}, AppConfig);

	return TabNav;
};

/**
 * Wrap the navigator
 */
const AppContainer = createAppContainer(AppNavigator());

export default AppContainer;