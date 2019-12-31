/**
 * BrowseRouteConfig.ts
 * - Configuration for viewing routes in a config
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { MaterialTabBarOptions } from 'react-navigation-tabs/lib/typescript/src/types';
import BrowseTabView from './SourceViewSearch';

const Routes = {
	LatestView: {
		screen: BrowseTabView,
		navigationOptions: {
			tabBarLabel: "Latest",
			barStyle: { backgroundColor: 'purple' },
			activeColor: '#282828',
			tabBarIcon: () => (
				<Icon
					name='new-releases'
					size={17}
					color='#282828' />
			),
		},
	},
	SearchView: {
		screen: BrowseTabView,
		navigationOptions: {
			tabBarLabel: 'Search',
			barStyle: { backgroundColor: 'pink' },
			activeColor: '#282828',
			tabBarIcon: () => (
				<Icon
					name='search'
					size={17}
					color='#282828' />
			),
		},
	},
	HotView: {
		screen: BrowseTabView,
		showIcon: true,
		navigationOptions: {
			showLabel: false,
			tabBarLabel: 'Hot',
			barStyle: { backgroundColor: 'white' },
			activeColor: 'red',
			tabBarIcon: ({focused, tintColor}: any) => (
				<MaterialCommunityIcon
					name='fire'
					size={17}
					color='red' />
			),
		},
	},
};

const tabBarOptions = {
	initialRouteName: 'SearchView',
	activeTintColor: '#282828',
	inactiveTintColor: 'black',
	labelStyle: {
		fontSize: 12,
	},
	tabStyle: {
		width: 100,
	},
	style: {
		// backgroundColor: 'blue',
	},
};

	// {
	//   swipeEnabled: true,
	//   tabBadgeBadge: true,
	// });

const BrowseTabNavigator = createMaterialTopTabNavigator(Routes, tabBarOptions);

export default BrowseTabNavigator;