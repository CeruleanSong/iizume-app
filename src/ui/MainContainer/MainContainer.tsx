import React from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { LibraryTab } from "./LibraryTab";
import { GalleryTab } from "./GalleryTab";
import { SettingsTab } from "./SettingsTab";

import { routes } from "../../constants/routes.json";

// main app route
const AppNavigator = createStackNavigator({
	Library: { screen: LibraryTab },
	Gallery: { screen: GalleryTab },
	Settings: { screen: SettingsTab }
}, {
	initialRouteName: `${routes[0].name}`,
	headerMode: "none"
});

const MainContainer = createAppContainer(AppNavigator);

export {
	MainContainer,
}
