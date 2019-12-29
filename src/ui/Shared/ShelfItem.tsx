/**
 * MangaPreview.ts
 * - Handles application settings.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

interface ItemProps {
	title?: string;
	url: string;
}

/**
 * Component for settings interactions
 */
const ShelfItem: React.FC<ItemProps> = (props: ItemProps) => {
	return (
		<TouchableOpacity style={styles.item} activeOpacity={0.8} onPress={() => console.debug("Pressed " + props.title)}>
			<View style={styles.imageWrapper}>
				<Image
					style={styles.image}
					source={{uri: props.url}} />
			</View>
			<View style={styles.itemTitle}>
				<Text style={styles.itemText}> {props.title} </Text>
			</View>
		</TouchableOpacity>
	);
};

/*************** Styles ***************/
const styles = StyleSheet.create({
	item: {
		marginTop: "2%",
		marginLeft: "auto",
		marginRight: "auto",

		borderRadius: 5,

		width: "48%",
		aspectRatio: .75,
	},
	itemTitle: {
		width: '100%',
		height: "15%",
		backgroundColor: '#e05c74',

		justifyContent: "center",
		alignItems: "center",

		borderBottomStartRadius: 5,
		borderBottomEndRadius: 5,
	},
	itemText: {
		fontSize: 16,
		padding: 2,
		color: '#ffffff',
		fontWeight: "bold",
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