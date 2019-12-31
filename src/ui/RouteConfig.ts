/**
 * RouteConfig.ts
 * - Stores possible routes within application
 * Notes:
 * - N/A
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import Browse from './Pages/Browse';
import BrowseTabNavigator from './Pages/BrowseTabNavigator';
import Gallery from './Pages/Gallery';
import Library from "./Pages/Library";
import Settings from "./Pages/Settings";

const Routes = {
	Library: {
		name: "Library",
		screen: Library,
	},
	Latest: {
		name: "Latest",
		screen: Browse,
	},
	Browse: {
		name: "Browse",
		screen: Browse,
	},
	BrowseTabNavigator: {
		name: 'BrowseTabNavigator',
		screen: BrowseTabNavigator,
		Routes: {
			Search: {
				name: "Latest",
				// screen: Browse,
			},
			Latest: {
				name: "Latest",
				// screen: Browse,
			},
			Hot: {
				name: "Latest",
			// screen: Browse,
			},
		},
	},
	Gallery: { /* NOTE: Might not be needed ? */
		name: "Gallery",
		screen: Gallery,
	},
	Settings: {
		name: "Settings",
		screen: Settings,
	},
};

export default Routes;