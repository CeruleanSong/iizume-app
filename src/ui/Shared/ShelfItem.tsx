/**
 * ShelfItem.ts
 * - Handles application settings.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ItemProps {
	title?: string;
	uri: string;
	onSelect: () => void;
}

/**
 * Component for settings interactions
 */
const ShelfItem: React.FC<ItemProps> = (props: ItemProps) => {
	return (
		<TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => props.onSelect()}>
			<View style={styles.imageWrapper}>
				<Image
					style={styles.image}
					source={{uri: props.uri}} />
			</View>
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

		borderRadius: 5,

		// width: "48%",
		width: "31.333%",
		aspectRatio: .7,
	},
	itemTitle: {
		width: '100%',
		minHeight: "15%",
		maxHeight: "15%",
		backgroundColor: '#ffb7c5',

		justifyContent: 'center',
		alignItems: 'flex-start',

		borderBottomStartRadius: 5,
		borderBottomEndRadius: 5,

		// overflow: 'ellipsis',
	},
	itemText: {
		fontSize: 14,
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

export default ShelfItem;
