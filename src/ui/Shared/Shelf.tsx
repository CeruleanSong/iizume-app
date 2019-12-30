/**
 * Shelf.ts
 * - Handles application settings.
 * Notes:
 * - Refresh threshold bug's when set to 0?
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React, { JSXElementConstructor } from 'react';
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Preview } from '../../lib/manga/Preview';
import ShelfItem from './ShelfItem';

interface ShelfProps {
	list: Preview[];
	onReachEnd: () => Promise<void>;
	onSelect: (selected: Preview) => void;
}

/**
 * Component for settings interactions
 */
const Shelf: React.FC<ShelfProps> = (props: ShelfProps)  => {
	const [refreshing, setRefreshing] = React.useState(true);

	const renderFooter = () => {
		// it will show indicator at the bottom of the list when data is loading otherwise it returns null
		if (!refreshing) { return null; }
		return (
			<ActivityIndicator style={{marginBottom: '4%'}} />
		);
	};

	const handleLoad = async () => {
		setRefreshing(true);
		await props.onReachEnd?.();
		setRefreshing(false);
	};

	return (
		<View style={styles.container}>
			<FlatList
			data={props.list}
			horizontal={false}
			numColumns={cols}
			removeClippedSubviews={true}
			contentContainerStyle={styles.container}
			 // source={item.source} id={item.id}
			renderItem={({ item, index }) => <ShelfItem key={index} title={item.title} uri={item.uri} onSelect={() => props.onSelect(item)} /> }
			keyExtractor={(item, index) => index.toString() /* item.id ?? item.title */}
			ListFooterComponent={renderFooter()}
			// refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
			onEndReached={handleLoad}
			onEndReachedThreshold={refreshThreshold}
			// refreshing={refreshing}
			// onRefresh={onRefresh}
			/>
		</View>
	);
};

/*************** style ***************/

const refreshThreshold = .1;

const cols = 2;

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