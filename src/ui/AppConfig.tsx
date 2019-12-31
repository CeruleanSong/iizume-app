/**
 * AppConfig.ts
 * - Stores top level routes in program
 * Notes:
 * - Ignore headermode error by linter
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import { NavigationSwitchRouterConfig } from 'react-navigation';
import History from './pages/History';
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import Updates from './pages/Updates';
import Browse from './pages/browse/Browse';
import BrowseTabNavigator from './pages/browse/SourceViewConfig';

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
		screen: Updates,
	},
	/* Recently read manga */
	History: {
		name: "History",
		screen: History,
	},
	/* Search for new manga */
	Browse: {
		name: "Browse",
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
const AppConfig: NavigationSwitchRouterConfig =  {
	initialRouteName: AppRoutes.Library.name,
	backBehavior: 'initialRoute',
	headerMode: "none", // ignore linter
};

export {
	AppConfig,
	AppRoutes,
};