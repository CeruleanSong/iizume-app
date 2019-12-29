/**
 * MangaPreview.ts
 * - Handles application settings.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

/**
 * Component for settings interactions
 */
const ShelfItem = ({ title, url }: any) => {
	return (
		<View style={styles.item}>
			<Image
				style={styles.image}
				source={{uri: url}} />
			<Text style={{ position: 'absolute', fontSize: 14, padding: 2, width: '90%', backgroundColor: '#f3eef0', color: '#ff1f48', margin: 'auto', bottom: 0 }}> AAAAA </Text>
		</View>
	);
};

/*************** Styles ***************/

const width = 100;
const height = 100;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		width: '100%',
	},
	item: {
		marginLeft: '1%',
		marginRight: '1%',
		marginTop: '0%',
		marginBottom: '4%',

		maxWidth: '30.66%',
		minWidth: '30.66%',

		aspectRatio: .65,

		backgroundColor: '#CCC',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'stretch',
	},
});

const imageStyle = StyleSheet.create({
	image: {
		flexGrow: 1,
		flexBasis: 0,
		width,
		height,
	},
});

export {
	ShelfItem,
};