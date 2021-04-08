import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, { EasingNode } from 'react-native-reanimated';
import React, { useState } from 'react';

interface Props {
	children: JSX.Element[] | JSX.Element;
};

const style = StyleSheet.create({
	touchableRippleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'visible',
		backgroundColor: '#0000',
		width: '100%'
	},
	opacity: {
		position: 'absolute',
		alignSelf: 'center',
		overflow: 'visible',
		backgroundColor: '#000f'
	}
});

const TouchableOpacity: React.FunctionComponent<Props> = (props: Props) => {
	const maxOpacity = 0.2;
	
	const [ opacity, useOpacity ] = useState(new Animated.Value<number>(0));
	
	const onPressIn = () => {
		Animated.timing(opacity, {
			toValue: maxOpacity,
			duration: 200,
			easing: EasingNode.bezier(0.0, 0.0, 0.2, 1)
		}).start(() => {
			useOpacity(new Animated.Value(maxOpacity));
		});
	};

	const onPressOut = () => {
		Animated.timing(opacity, {
			toValue: 0,
			duration: 200,
			easing: EasingNode.bezier(0.0, 0.0, 0.2, 1)
		}).start(() => {
			useOpacity(new Animated.Value(0));
		});
	};

	const renderOpacity = () => (<Animated.View
		style={[
			style.opacity,
			{
				width: '100%',
				height: '100%',
				opacity: opacity
			}
		]}/>
	);

	return (
		<TouchableWithoutFeedback
			style={[ style.touchableRippleContainer ]}
			onPress={onPressOut}
			onPressIn={onPressIn} onPressOut={onPressOut}>
			{renderOpacity()}
			{props.children}
		</TouchableWithoutFeedback>
	);
};

export default TouchableOpacity;