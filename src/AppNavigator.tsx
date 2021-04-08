import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import BottomTabNavigator from '@components/bottom-tab-bar/BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

import Browse from '@pages/browse/Browse';
import Library from '@pages/library/Library';
import Recent from '@pages/recent/Recent';

const LibraryStack = createStackNavigator();
export const LibraryNavigator = () => {
	return (
		<LibraryStack.Navigator initialRouteName='Library'
			screenOptions={{ headerShown: false }}>
			<LibraryStack.Screen name="Library" component={Library} />
		</LibraryStack.Navigator>
	);
};

const RecentStack = createStackNavigator();
export const RecentNavigator = () => {
	return (
		<RecentStack.Navigator initialRouteName='Recent'
			screenOptions={{ headerShown: false }}>
			<RecentStack.Screen name="Recent" component={Recent} />
		</RecentStack.Navigator>
	);
};

const BrowseStack = createStackNavigator();
export const BrowseNavigator = () => {
	return (
		<BrowseStack.Navigator initialRouteName='Browse'
			screenOptions={{ headerShown: false }}>
			<BrowseStack.Screen name="Browse" component={Browse} />
		</BrowseStack.Navigator>
	);
};

const AppNavigator = () => {
	return (
		<BottomTabNavigator>
			{ { name: 'Library', component: LibraryNavigator, icon: 'book-outline' } }
			{ { name: 'Recent', component: RecentNavigator, icon: 'time-outline' } }
			{ { name: 'Browse', component: BrowseNavigator, icon: 'compass-outline' } }
		</BottomTabNavigator>
	);
};

export default gestureHandlerRootHOC(AppNavigator);