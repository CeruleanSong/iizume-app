import { ActivityIndicator } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import ShelfItem from './Shelfitem';

interface ShelfProps {
	list: any[];
	onReachEnd?: () => Promise<void>;
	onSelect?: (selected: any) => void;
}

const Shelf = (props: ShelfProps) => {
	const [ refreshing, setRefreshing ] = React.useState(true);

	const styles = StyleSheet.create({
		container: {
			width: '100%'
			// padding: 4,
		},
		shelf: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'flex-start',
	
			minWidth: '100%'
		}
	});
	
	const renderFooter = () => {
		// it will show indicator at the bottom of the list when data is loading otherwise it returns null
		if (!refreshing) { return null; }
		return (
			<ActivityIndicator style={{ marginBottom: '4%' }} />
		);
	};

	const handleLoad = async () => {
		setRefreshing(true);
		await props.onReachEnd?.();
		setRefreshing(false);
	};
	
	const refreshThreshold = .1;
	const columns = 3;

	return (
		<View style={styles.container}>
			<FlatList
				data={props.list}
				horizontal={false}
				numColumns={columns}
				removeClippedSubviews={true}
				contentContainerStyle={styles.container}
			 // source={item.source} id={item.id}
				renderItem={({ item, index }) => <ShelfItem key={index} title={item.title} cover={item.cover} onSelect={() => props.onSelect(item)} /> }
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

export default Shelf;
