
import { Gallery } from './Gallery/Gallery';
import { Library } from "./Library/Library";
import { Settings } from "./Settings/Settings";

const Routes = {
	Library: {
		name: "Library",
		screen: Library,
	},
	Gallery: {
		name: "Gallery",
		screen: Gallery(),
	},
	Settings: {
		name: "Settings",
		screen: Settings,
	},
};

export {
	Routes,
};