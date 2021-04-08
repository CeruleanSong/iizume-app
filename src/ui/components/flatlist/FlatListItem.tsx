import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';

import TouchableOpacity from '@components/TouchableOpacity';

interface Props {
	title: string;
	onPress: () => void;
}

const FlatListItem = (props: Props) => {
	const styles = StyleSheet.create({
		itemContainer: {
			width: '100%',
			borderBottomColor: '#0001',
			borderBottomWidth: 1
		},
		item: {
			width: '100%',
			paddingHorizontal: 8,
			paddingVertical: 16
		},
		itemText: {
			fontSize: 24,
			padding: 4,
			color: '#ffff',
			fontWeight: 'bold',
			textAlign: 'center'
		}
	});

	return (
		<TouchableWithoutFeedback
			style={styles.itemContainer}
			onPress={props.onPress}>
			<TouchableOpacity>
				<Text style={styles.item}>
					{props.title}
				</Text>
			</TouchableOpacity>
		</TouchableWithoutFeedback>
	);
};

export default FlatListItem;
