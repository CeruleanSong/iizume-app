
import Browse from './Pages/Browse';
import Gallery from './Pages/Gallery';
import Library from "./Pages/Library";
import Settings from "./Pages/Settings";

const Routes = {
	Library: {
		name: "Library",
		screen: Library,
	},
	Browse: {
		name: "Browse",
		screen: Browse,
	},
	Gallery: {
		name: "Gallery",
		screen: Gallery,
	},
	Settings: {
		name: "Settings",
		screen: Settings,
	},
};

export default Routes;