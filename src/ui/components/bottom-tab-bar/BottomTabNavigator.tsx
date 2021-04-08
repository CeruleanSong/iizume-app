import React from 'react';
import { View } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabBar, BottomTabScreen } from '.';

interface Props {
	children: BottomTabScreen[];
	initialRouteName?: string;
	backBehavior?: 'initialRoute' | 'firstRoute' | 'history' | 'order' | 'none';
};

const BottomTabNavigator: React.FunctionComponent<Props> = (props: Props) => {
	const AppNavigatorConfig = createBottomTabNavigator();
	const screens = [];

	for(const i in props.children) {
		screens.push(
			<AppNavigatorConfig.Screen key={i}
				name={props.children[i].name}
				component={gestureHandlerRootHOC(props.children[i].component)} />);
	}
	
	return (
		<View style={{ flex: 1, position: 'relative' }}>
			<AppNavigatorConfig.Navigator
				tabBar={
					(tabProps: BottomTabBarProps) => (
						<BottomTabBar {...tabProps}>
							{props.children}
						</BottomTabBar>
					)
				}
				initialRouteName={props.initialRouteName ? props.initialRouteName : props.children[0].name}
				backBehavior={props.backBehavior ? props.backBehavior : 'initialRoute'}>
				{screens}
			</AppNavigatorConfig.Navigator>
		</View>
	);
};

export default BottomTabNavigator;