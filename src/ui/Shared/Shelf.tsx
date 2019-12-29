/**
 * Shelf.ts
 * - Handles application settings.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React, { JSXElementConstructor } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

interface ShelfProps {
	props?: any;
	parentWidth?: number;
}

/******* FAKE DATA *******/
const DATA = [
	{
		id: '0',
		title: 'Evil and Save',
		url: 'https://s0.mangadex.org/images/manga/19872.jpg?1519175508',
	},
	{
		id: '1',
		title: 'Naruto',
		url: 'https://s0.mangadex.org/images/manga/5.jpg',
	},
	{
		id: '2',
		title: 'First Item',
		url: 'https://s0.mangadex.org/images/manga/5.jpg',
	},
	{
		id: '3',
		title: 'First Item',
		url: 'https://s0.mangadex.org/images/manga/5.jpg',
	},
	{
		id: '4',
		title: 'First Item',
		url: 'https://s0.mangadex.org/images/manga/5.jpg',
	},
	{
		id: '5',
		title: 'First Item',
		url: 'https://s0.mangadex.org/images/manga/5.jpg',
	},
	{
		id: '6',
		title: 'First Item',
		url: 'https://s0.mangadex.org/images/manga/5.jpg',
	},
	{
		id: '7',
		title: 'First Item',
		url: 'https://s0.mangadex.org/images/manga/5.jpg',
	},
];
/******* FAKE DATA *******/

function Item({ title, url }: any) {
	return (
	<View style={styles.item}>
		<Image
			style={styles.image}
			source={{uri: url}} />
		<Text style={{ position: 'absolute', fontSize: 14, padding: 2, width: '90%', backgroundColor: '#f3eef0', color: '#ff1f48', margin: 'auto', bottom: 0 }}> {title} </Text>
	</View>
	);
}

/**
 * Component for settings interactions
 */
const Shelf: JSXElementConstructor<ShelfProps> = ()  => {

	return (
	<FlatList
		data={DATA}
		horizontal={false}
		numColumns={cols}
		contentContainerStyle={styles.container}
		renderItem={({ item }) => <Item url={item.url} title={item.title} /> }
		keyExtractor={(item) => item.id} />
	);
};

const cols = 3;
const style = StyleSheet.create({
	shelf: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',

		minWidth: '100%',

		backgroundColor: 'red',
	},
	image: {
		flexGrow: 1,
		flexBasis: 0,

		resizeMode: 'stretch',

		marginLeft: '1%',
		marginRight: '1%',
		marginTop: '16%',

		aspectRatio: 1,
		maxWidth: '25%',
		minWidth: '25%',

		// maxHeight:

	},
});

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

export {
	Shelf,
};