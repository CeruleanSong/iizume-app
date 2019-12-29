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

import { routes } from "../constants/Component.json";

/**
 * Create a stack navigator
 */
const AppNavigator = () => {
	return createStackNavigator({
		Library: { screen: Library },
		Gallery: { screen: Gallery },
		Settings: { screen: Settings },
	}, {
		initialRouteName: `${routes.library.name}`,
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