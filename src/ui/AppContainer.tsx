/**
 * This source code is for mangement of the root container for the program
 *
 * The settings compoent of for manging important settings and app wide variables/functions
 */

 import { createAppContainer, createStackNavigator } from 'react-navigation';
import { NavigationContainer } from 'react-navigation';

import { LibraryCompenent } from "./LibraryComponent";
import { GalleryCompenent } from "./GalleryComponent";
import { SettingsComponent } from "./SettingsComponent";

import { routes } from "../constants/Component.json";

/**
 * Creates a root container for an app
 *
 * @class AppContainer
 * @classdesc Creates a root container for an app
 * @constructor
 *
 * @function create {React.Component} Returns an app container object
 *
 * @prop navigator {NavigationContainer} Navigation system by react-navigator
 */
class AppContainer {
	/*** public ***/

	/**
	 * 
	 */
	public constructor() {
		this.navigator = createStackNavigator({
			Library: { screen: LibraryCompenent },
			Gallery: { screen: GalleryCompenent },
			Settings: { screen: SettingsComponent },
		}, {
			initialRouteName: `${routes[0].name}`,
			headerMode: "none",
		});
	}

	public create() {
		return createAppContainer(this.navigator);
	}
	
	/*** private ***/
	
	private navigator: NavigationContainer;
}

export {
	AppContainer,
};
