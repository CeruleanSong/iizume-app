import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import TouchableRipple from '@components/TouchableRipple';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface Props {
	navigation: StackNavigationProp<any>;
	title: string;
	back?: boolean;
	backFunc?: () => void;
	right?: JSX.Element[];
}

const Header = (props: Props) => {
	const viewportWidth = Dimensions.get('window').width;

	const style = StyleSheet.create({
		header: {
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: '#fff0'
		},
		headerTitle: {
			fontWeight: 'bold',
			flexWrap: 'nowrap',
			padding: 16,
			fontSize: 22
		},
		headerItem: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-end',
			width: viewportWidth / 3,
			paddingHorizontal: 0,
			paddingVertical: 0
		}
	});

	const rightItems = [];
	for(const i in props.right) {
		rightItems.push(
			<TouchableRipple key={i} size={52}>
				<View style={{ padding: 16 }}>
					{props.right[parseInt(i)]}
				</View>
			</TouchableRipple>
		);
	}

	const onBackPressed = () => {
		if(props.backFunc) {
			props.backFunc();
		} else {
			props.navigation.goBack();
		}
	};

	return (
		<View style={[ style.header ]}>
			<View style={[ style.headerItem, { justifyContent: 'flex-start' } ]}>
				{ props.back ? 
					<TouchableWithoutFeedback
						onPress={onBackPressed}>
						<TouchableRipple size={52}>
							<View style={{ padding: 16, flexDirection: 'row' }}>
								<Ionicons color='#3d3d3d' size={32} name='arrow-back-outline' />
							</View>
						</TouchableRipple>
					</TouchableWithoutFeedback> : null
				}
			</View>

			<View style={[ style.headerItem, { justifyContent: 'center' } ]}>
				<Text numberOfLines={1} ellipsizeMode='tail' style={[ style.headerTitle, { color: '#3d3d3d' } ]}>
					{props.title}
				</Text>
			</View>

			<View style={[ style.headerItem, { alignItems: 'flex-end', flexDirection: 'row' } ]}>
				{ rightItems ? rightItems : null }
			</View>
		</View>
	);
};

export default Header;
