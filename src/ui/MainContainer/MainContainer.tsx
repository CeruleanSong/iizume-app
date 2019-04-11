import React from 'react';
import { Text, View } from 'react-native';
// React navigation
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { LibraryTab } from "./LibraryTab";
import { GalleryTab } from "./GalleryTab";
import { SettingsTab } from "./SettingsTab";

import Icon from 'react-native-vector-icons/MaterialIcons';
/*
const TabNavigator = createBottomTabNavigator({
  Library: LibraryTab,
});

const MainContainer = createAppContainer(TabNavigator);
*/

const MaterialTabNavigator =
createMaterialBottomTabNavigator({
	LibraryTab: {
		screen: LibraryTab,
	    navigationOptions: {
			showIcon: true,
			tabBarLabel:"Library",
			tabBarIcon: ({ tintColor }) => (<Icon name="book" size={20} color={tintColor}/>)
    	},
	},
	GalleryTab: {
		screen: LibraryTab,
	    navigationOptions: {
			showIcon: true,
			tabBarLabel:"Gallery",
			tabBarIcon: ({ tintColor }) => (<Icon name="shopping-basket" size={20} color={tintColor}/>)
    	},
	},
	SettingsTab: {
		screen: SettingsTab,
	    navigationOptions: {
			showIcon: true,
			tabBarLabel:"Settings",
			tabBarIcon: ({ tintColor }) => (<Icon name="settings" size={20} color={tintColor}/>)
    	},
	},
}, {
	initialRouteName: 'LibraryTab',
	activeColor: '#ffffff',
	inactiveColor: '#a5a5a5',
	barStyle: { backgroundColor: '#ffb7c5' },
});

const MainContainer = createAppContainer(MaterialTabNavigator);

export {
	MainContainer,
}
