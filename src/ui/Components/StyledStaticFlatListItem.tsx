/**
 * StyledStaticFlatListItem.ts
 * - Handles a flat lists that do not have updating data.
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Sources, SourceType } from '../../core/source/SourceList';

interface StyledStaticFlatListItemProps {
	title?: string;
	onSelect: (selected: SourceType) => void;
}

const StyledStaticFlatListItem: React.FC<StyledStaticFlatListItemProps> = (props: StyledStaticFlatListItemProps) => {
	return (
		<TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => props.onSelect(Sources.mabgasee)}>
			<View style={styles.itemTitle}>
				<Text numberOfLines={1} style={styles.itemText}> {props.title} </Text>
			</View>
		</TouchableOpacity>
	);
};

/*************** Styles ***************/

const styles = StyleSheet.create({
	item: {
		marginTop: "2%",
		// marginLeft: "auto",
		// marginRight: "auto",
		marginHorizontal: "1%",

		// borderRadius: 5,

		// width: "48%",
		// width: "100%",
	},
	itemTitle: {
		width: '100%',
		backgroundColor: '#ffb7c5',

		justifyContent: 'center',
		alignItems: 'flex-start',

		borderRadius: 5,

		// overflow: 'ellipsis',
	},
	itemText: {
		fontSize: 20,
		padding: 2,
		color: '#ffffff',
		fontWeight: "bold",
		textAlign: "center",
	},
	imageWrapper: {
		width: '100%',
		height: '85%',

		borderTopStartRadius: 5,
		borderTopEndRadius: 5,

		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: 'cover',
	},
});

export default StyledStaticFlatListItem;
