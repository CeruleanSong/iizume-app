import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import BottomTabBarItem from './BottomTabBarItem';
import { BottomTabScreen } from '.';
import TouchableRipple from '@components/TouchableRipple';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface Props extends BottomTabBarProps {
	children: BottomTabScreen[];
};

const style = StyleSheet.create({
	tabBarContainer: {
		position: 'absolute',
		flexDirection: 'row',
		backgroundColor: '#ffff',
		overflow: 'hidden',
		elevation: 8,
		height: 60,
		bottom: 0
	},
	tabBarItem: {
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: '#0000',
		overflow: 'visible'
	},
	slider: {
		position: 'absolute',
		backgroundColor: '#e200e2',
		borderRadius: 40,
		height: 2,
		top: 0
	}
});

const BottomTabBar: React.FunctionComponent<Props> = (props: Props) => {
	const [ translateValue ] = useState(new Animated.Value(0));

	const viewportWidth = Dimensions.get('window').width;
	const tabWidth = viewportWidth / props.state.routes.length;
	const sliderWidth = (tabWidth / 2);
	const items = [];

	useEffect(() => {
		Animated.spring(translateValue, {
			toValue: props.state.index * tabWidth,
			velocity: 20,
			useNativeDriver: true
		}).start();
	}, [ props.state.index ]);

	for(const i in props.state.routes) {
		const route = props.state.routes[i];
		const descriptors = props.descriptors[route.key];
		const active = props.state.index === parseInt(i);
		
		const onPress = () => {
			const event = props.navigation.emit({
				type: 'tabPress',
				target: route.key,
				canPreventDefault: true
			});
			
			if (!active && !event.defaultPrevented) {
				props.navigation.navigate(route.name);
			}
		};

		const onLongPress = () => {
			props.navigation.emit({
				type: 'tabLongPress',
				target: route.key
			});
		};

		items.push(
			<TouchableWithoutFeedback
				key={i}
				accessibilityRole="button"
				accessibilityState={active ? { selected: false } :  { selected: false }}
				accessibilityLabel={descriptors.options.tabBarAccessibilityLabel}
				onPress={onPress}
				onLongPress={onLongPress}
				style={[ style.tabBarItem, { width: tabWidth } ]}>
				<TouchableRipple size={tabWidth}>
					<BottomTabBarItem title={route.name} icon={props.children[i].icon} active={active} />
				</TouchableRipple>
			</TouchableWithoutFeedback>
		);
	}

	return (
		<View style={[ style.tabBarContainer, { width: viewportWidth } ]}>
			<Animated.View
				style={[
					style.slider,
					{
						left: (tabWidth / 2) - (sliderWidth / 2),
						transform: [ { translateX: translateValue } ],
						width: sliderWidth
					}
				]}
			/>
			{items}
		</View>
	);
};

export default BottomTabBar;