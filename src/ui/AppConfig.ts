/**
 * AppConfig.ts
 * - Stores top level routes in program
 * Notes:
 * - N/A
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import Browse from './Pages/Browse';
import BrowseTabNavigator from './Pages/BrowseTabNavigator';
import Library from "./Pages/Library";
import Settings from "./Pages/Settings";

/**
 * Top level routes for application
 */
const AppRoutes = {
	/* Initial route of program, shows manga saved by user */
	Library: {
		name: "Library",
		screen: Library,
	},
	/* Latest updates of saved manga */
	Updates: {
		name: "Updates",
		screen: Browse,
	},
	/* Search for new manga */
	BrowseTabNavigator: {
		name: 'BrowseTabNavigator',
		screen: BrowseTabNavigator,
	},
	/* Application settings */
	Settings: {
		name: "Settings",
		screen: Settings,
	},
};

/**
 * Configuration for top level route
 */
const AppConfig: any =  {
	initialRouteName: `${AppRoutes.Library.name}`, // ? allow user to change later?
	headerMode: "none",
};

export {
	AppConfig,
	AppRoutes,
};