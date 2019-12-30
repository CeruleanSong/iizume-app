/**
 * ShelfItem.ts
 * - Handles application settings.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Preview } from '../../lib/manga/Preview';

const ShelfItem = ({ title, uri, source, id}: Preview) => {
	return (
		<View style={style.item}>
			<Image
				style={style.image}
				source={{uri}} />
			<Text style={{ position: 'absolute', fontSize: 10, borderTopRightRadius: 30, borderBottomRightRadius: 30,
				padding: 2, width: '90%', backgroundColor: '#f3eef0', color: '#ff1f48', margin: 'auto', bottom: 0 }}>
				{title}
			</Text>
		</View>
	);
};

/*************** style ***************/

const width = 100;
const height = 100;

const style = StyleSheet.create({
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

		aspectRatio: .75,

		backgroundColor: '#CCC',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'stretch',
	},
});

export {
	ShelfItem,
};