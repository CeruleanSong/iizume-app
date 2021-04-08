import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, { EasingNode } from 'react-native-reanimated';
import React, { useState } from 'react';

interface Props {
	children: JSX.Element;
	size?: number;
};

const style = StyleSheet.create({
	touchableRippleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'visible',
		backgroundColor: '#0000',
		width: '100%'
	},
	ripple: {
		position: 'absolute',
		alignSelf: 'center',
		overflow: 'visible',
		backgroundColor: '#000f'
	}
});

const TouchableRipple: React.FunctionComponent<Props> = (props: Props) => {
	const maxOpacity = 0.2;
	const maxScale = props.size ? props.size : 24;
	
	const [ size ] = useState(maxScale);
	const [ opacity, useOpacity ] = useState(new Animated.Value(maxOpacity));
	const [ scale, useScale ] = useState<Animated.Value<number>>(new Animated.Value(0));
	
	const onPressIn = () => {
		Animated.timing(scale, {
			toValue: 1,
			duration: 200,
			easing: EasingNode.bezier(0.0, 0.0, 0.2, 1)
		}).start();
	};

	const onPressOut = () => {
		Animated.timing(opacity, {
			toValue: 0,
			duration: 200,
			easing: EasingNode.bezier(0.0, 0.0, 0.2, 1)
		}).start(() => {
			useOpacity(new Animated.Value(maxOpacity));
			useScale(new Animated.Value(0));
		});
	};

	const renderRipple = () => (<Animated.View
		style={[
			style.ripple,
			{
				width: size,
				height: size,
				opacity: opacity,
				transform: [ { scale: scale } ],
				borderRadius: size / 2
			}
		]}/>
	);

	return (
		<TouchableWithoutFeedback
			style={[ style.touchableRippleContainer ]}
			onPress={onPressOut}
			onPressIn={onPressIn} onPressOut={onPressOut}>
			{renderRipple()}
			{props.children}
		</TouchableWithoutFeedback>
	);
};

export default TouchableRipple;