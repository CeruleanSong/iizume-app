/**
 * AppContainer.ts
 * - Root component & root ui actions
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Gallery } from './Gallery/Gallery';
import { Library } from "./Library/Library";
import { Settings } from "./Settings/Settings";

import { Routes } from "./RouteConfig";

/**
 * Create a stack navigator
 */
const AppNavigator = () => {
	return createStackNavigator(Routes, {
		initialRouteName: `${Routes.Library.name}`,
		headerMode: "none",
	});
};

/**
 * Wrap the navigator
 */
const AppContainer = createAppContainer(AppNavigator());

export {
	AppContainer,
};