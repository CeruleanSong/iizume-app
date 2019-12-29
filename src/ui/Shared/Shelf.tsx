/**
 * Shelf.ts
 * - Handles application settings.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ShelfItem from './ShelfItem';

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

/**
 * Component for settings interactions
 */
const Shelf: React.FC<ShelfProps> = ()  => {
	const cols = 2;
	return (
		<View style={styles.container}>
			<FlatList
				data={DATA}
				horizontal={false}
				numColumns={cols}
				contentContainerStyle={styles.container}
				renderItem={({ item }) => <ShelfItem url={item.url} title={item.title} /> }
				keyExtractor={(item) => item.id}
				/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 8,
	},
	shelf: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',

		minWidth: '100%',

		backgroundColor: 'red',
	},
});

export default Shelf;