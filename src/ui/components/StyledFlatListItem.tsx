/**
 * StyledStaticFlatListItem.ts
 * - Handles a flat lists that do not have updating data.
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

interface StyledStaticFlatListItemProps {
	title?: string;
	onSelect: (selected: any) => void;
}

const StyledFlatListItem: React.FC<StyledStaticFlatListItemProps> = (props: StyledStaticFlatListItemProps) => {
	return (
		<View style={styles.item}>
			<TouchableNativeFeedback
				onPress={() => props.onSelect(null)}
				useForeground={true}
				background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.25)')}>
				<View>
					<View style={styles.itemTitle}>
					<Text numberOfLines={1} style={styles.itemText}> {props.title} </Text>
				</View>
			</View>
			</TouchableNativeFeedback>
		</View>
	);
};

/*************** Styles ***************/

const styles = StyleSheet.create({
	item: {
		overflow: "hidden",
	},
	itemTitle: {
		backgroundColor: '#6d6d6d', // grey
		// backgroundColor: '#ffb7c5', // pink

		borderColor: '#6d6d6d',
		borderWidth: 4,
		borderRadius: 4,

		minWidth: '100%',

	},
	itemText: {
		fontSize: 24,
		padding: 2,
		color: '#ffffff',
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default StyledFlatListItem;
