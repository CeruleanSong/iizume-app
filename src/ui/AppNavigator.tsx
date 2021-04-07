import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import BrowseSource from './pages/browse/BrowseSource';
import BrowseTab from './pages/browse/BrowseTab';
import LibraryTab from './pages/library/LibraryTab';
import RecentTab from './pages/recent/RecentTab';

enableScreens();

const LibraryStack = createStackNavigator();
LibraryStack.Navigator.defaultProps = {
	initialRouteName: 'Library',
	screenOptions: {
		headerShown: false
	}
};
export const LibraryNavigator = () => {
	return (
		<LibraryStack.Navigator>
			<LibraryStack.Screen name="Library" component={LibraryTab} />
		</LibraryStack.Navigator>
	);
};

const RecentStack = createStackNavigator();
RecentStack.Navigator.defaultProps = {
	initialRouteName: 'Recent'
};
export const RecentNavigator = () => {
	return (
		<RecentStack.Navigator>
			<RecentStack.Screen name="Recent" component={RecentTab} />
		</RecentStack.Navigator>
	);
};

const BrowseStack = createStackNavigator();
BrowseStack.Navigator.defaultProps = {
	initialRouteName: 'Browse',
	screenOptions: {
		headerShown: false
	}
};
export const BrowseNavigator = () => {
	return (
		<BrowseStack.Navigator>
			<BrowseStack.Screen name="Browse" component={BrowseTab} />
			<BrowseStack.Screen name="BrowseSource" component={BrowseSource} />
		</BrowseStack.Navigator>
	);
};

const NavigatorConfig = createMaterialBottomTabNavigator();
NavigatorConfig.Navigator.defaultProps = {
	initialRouteName: 'Library',
	backBehavior: 'initialRoute',
	activeColor: '#f3f3f3', // grey
	inactiveColor: '#828282', // grey
	barStyle: {
		backgroundColor: '#0c0c0c'
	},
	shifting: true,
	sceneAnimationEnabled: false
};
export const AppNavigator = () => {
	return (
		<NavigatorConfig.Navigator>
			<NavigatorConfig.Screen name="Library"
				options={{
					// tabBarColor: '#caffbf', // green
					tabBarIcon: ({ color }: any) => (
						<Ionicons size={24} color={color} name={'book-outline'} />
					)
				}} >
				{LibraryNavigator}
			</NavigatorConfig.Screen>
			<NavigatorConfig.Screen name="Recent"
				options={{
					// tabBarColor: '#9bf6ff', // blue
					tabBarIcon: ({ color }: any) => (
						<Ionicons size={24} color={color} name={'alert-circle-outline'} />
					)
				}}>
				{RecentNavigator}
			</NavigatorConfig.Screen>
			<NavigatorConfig.Screen name="Browse" component={BrowseNavigator}
				options={{
					// tabBarColor: '#ffc6ff', // pink
					tabBarIcon: ({ color }: any) => (
						<Ionicons size={24} color={color} name={'compass-outline'} />
					)
				}} />
		</NavigatorConfig.Navigator>
	);
};