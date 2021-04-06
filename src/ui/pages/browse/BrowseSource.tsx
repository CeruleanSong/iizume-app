import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialTopTabBar, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BrowseSourceTabLatest from './BrowseSourceTabLatest';
import BrowseSourceTabSearch from './BrowseSourceTabSearch';
import NativeContainer from '../../components/NativeContainer';
import NativeHeader from '../../components/NativeHeader';

interface BrowseSourceProps {
	navigation: StackNavigationProp<any>;
	route: any;
}

const BrowseSource = (props: BrowseSourceProps) => {
	const source = props.route.params.source;
		
	const BrowseSourceTabs = createMaterialTopTabNavigator();

	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={props.navigation}
				title={source.display_title} flat/>
			<BrowseSourceTabs.Navigator initialRouteName='latest'
				backBehavior='none'
				tabBar={(tabProps) => {
					return <MaterialTopTabBar {...tabProps}
						labelStyle={{ color: '#fff' }}
						style={{ backgroundColor: '#0c0c0c', elevation: 0 }} />;
				}}>
				<BrowseSourceTabs.Screen name="latest" component={BrowseSourceTabLatest} initialParams={{ source }} />
				<BrowseSourceTabs.Screen name="search" component={BrowseSourceTabSearch} initialParams={{ source }} />
			</BrowseSourceTabs.Navigator>
		</NativeContainer>
	);
};

export default BrowseSource;
