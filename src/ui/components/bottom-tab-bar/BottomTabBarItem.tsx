import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import Animated, { EasingNode } from 'react-native-reanimated';
import React, { useEffect, useState } from 'react';

interface Props {
	active?: boolean;
	title: string;
	icon?: string;
};

const BottomTabBarItem: React.FunctionComponent<Props> = (props: Props) => {
	const [ textScale ] = useState(new Animated.Value(0.0));
	const [ height ] = useState(new Animated.Value(8.0));

	useEffect(() => {
		if(props.active) {
			Animated.timing(textScale, {
				toValue: 1.0,
				duration: 200,
				easing: EasingNode.bezier(0.0, 0.0, 0.2, 1)
			}).start();
			Animated.timing(height, {
				toValue: 0.0,
				duration: 600,
				easing: EasingNode.bezier(0.0, 0.0, 0.2, 1)
			}).start();
		} else {
			Animated.timing(textScale, {
				toValue: 0.0,
				duration: 200,
				easing: EasingNode.bezier(0.0, 0.0, 0.2, 1)
			}).start();
			Animated.timing(height, {
				toValue: 8.0,
				duration: 600,
				easing: EasingNode.bezier(0.0, 0.0, 0.2, 1)
			}).start();
		}
	}, [ props.active ]);
	 
	return (
		<Animated.View
			style={[
				{ transform: [ { translateY: height } ] },
				{
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					width: '100%'
				}
			]}>
			{props.icon ?
				<Ionicons size={28} color={ props.active ? '#9400d3' : '#3d3d3d'} name={props.icon} /> : null
			}
			<Animated.View style={[ { transform: [ { scale: textScale } ] } ]}>
				<Text style={{ color: '#9400d3', fontSize: 12 }}>
					{props.title}
				</Text>
			</Animated.View>
		</Animated.View>
	);
};

export default BottomTabBarItem;