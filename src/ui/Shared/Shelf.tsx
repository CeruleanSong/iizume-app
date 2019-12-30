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
import { ShelfItem } from './ShelfItem';

interface ShelfList {
	state: any;
	list: Preview[] | null;
	updateFunc: any;
}

function wait(timeout: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
}

/**
 * Component for settings interactions
 */
const Shelf = ({list, state, updateFunc}: ShelfList)  => {
	const [refreshing, setRefreshing] = React.useState(true);
	const [data, dataList] = React.useState(list);

	const renderFooter = () => {
		// it will show indicator at the bottom of the list when data is loading otherwise it returns null
		if (!refreshing) { return null; }
		return (
			<ActivityIndicator style={{marginBottom: '4%'}} />
		);
	};

	//    const handleLoadMore = () => {
	// 	if (!refreshing) {
	// 	  this.page = this.page + 1; // increase page by 1
	// 	  this.fetchUser(this.page); // method for API call
	// 	}
	//   };

	// const onRefresh = React.useCallback(() => {
	//   	setRefreshing(true);
	// 	updateFunc();
	// 	setRefreshing(false);
	// }, [refreshing]);

	const handleLoad = () => {
		setRefreshing(true);
		const q = new Promise(async (res: any) => {
			await updateFunc();
		}).then((res) => {
			setRefreshing(false);
		});
	};

	return (
		<FlatList
		data={list}
		horizontal={false}
		numColumns={cols}
		removeClippedSubviews={true}
		contentContainerStyle={style.container}
		renderItem={({ item }) => <ShelfItem title={item.title} uri={item.uri} source={item.source} id={item.id} /> }
		keyExtractor={(item) => item.id ? item.id : item.title}
		ListFooterComponent={renderFooter()}
		// refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
		onEndReached={handleLoad}
		onEndReachedThreshold={refreshThreshold}
		// refreshing={refreshing}
		// onRefresh={onRefresh}
		/>
	);
};

/*************** style ***************/

const refreshThreshold = .1;

const cols = 3;

const style = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		width: '100%',
	},
	con: {
		padding: 0,
		margin: 0,
		flexDirection: 'row',
		alignSelf: 'flex-end',
		flexGrow: 1,
	},
	item: {
		marginLeft: '1%',
		marginRight: '1%',
		marginTop: '0%',
		marginBottom: '4%',

		maxWidth: '30.66%',
		minWidth: '30.66%',

		aspectRatio: 2,

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