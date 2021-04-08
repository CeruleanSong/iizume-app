import { FlatList } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import ShelfItem from './Shelfitem';

interface Props {
	list: any[];
	onReachEnd?: () => Promise<void>;
	onSelect?: (selected: any) => void;
}

const Shelf = (props: Props) => {
	const [ refreshing, setRefreshing ] = React.useState(true);

	const styles = StyleSheet.create({
		container: {
			paddingBottom: 100,
			padding: 4,
			width: '100%'
		}
	});
	
	const renderFooter = () => {
		if (!refreshing) { return null; }
	};

	const handleLoad = async () => {
		setRefreshing(true);
		await props.onReachEnd?.();
		setRefreshing(false);
	};
	
	const onSelect = (item: any) => {
		if(props.onSelect) {
			props.onSelect(item);
		}
	};

	const refreshThreshold = .1;
	const columns = 3;

	return (
		<View style={styles.container}>
			<FlatList
				data={props.list}
				numColumns={columns}
				removeClippedSubviews={true}
				contentContainerStyle={styles.container}
				style={styles.container}
				renderItem={({ item, index }) => {
					return (
						<ShelfItem key={index}
							title={item.title}
							cover={item.cover}
							onSelect={() => onSelect(item)} />
					);
				}}
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
