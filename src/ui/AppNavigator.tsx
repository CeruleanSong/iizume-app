import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import BrowseTab from './pages/browse/BrowseTab';
import HistoryTab from './pages/history/HistoryTab';
import LibraryTab from './pages/library/LibraryTab';
import RecentTab from './pages/recent/RecentTab';


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
			<NavigatorConfig.Screen name="Library" component={LibraryNavigator}
				options={{
					// tabBarColor: '#caffbf', // green
					tabBarIcon: ({ color }: any) => (
						<Ionicons size={24} color={color} name={'book-outline'} />
					)
				}} />
			<NavigatorConfig.Screen name="Recent" component={RecentTab}
				options={{
					// tabBarColor: '#9bf6ff', // orange
					tabBarIcon: ({ color }: any) => (
						<Ionicons size={24} color={color} name={'alert-circle-outline'} />
					)
				}} />
			<NavigatorConfig.Screen name="Browse" component={BrowseTab}
				options={{
					// tabBarColor: '#ffc6ff', // purple
					tabBarIcon: ({ color }: any) => (
						<Ionicons size={24} color={color} name={'compass-outline'} />
					)
				}} />
		</NavigatorConfig.Navigator>  
	);
};