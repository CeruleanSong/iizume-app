import { FlatList as RFlatList } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';

import FlatListItem from './FlatListItem';

interface Props {
	items: any[];
	onPress?: (selected: any) => void;
	textStyle?: TextStyle;
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 4,
		width: '100%'
	}
});


const FlatList = (props: Props) => {
	const columns = 1;
	const itemList = [];

	for (const i in props.items) {
		itemList.push({ index: i, item: props.items[i] });
	}
	
	return (
		<RFlatList
			data={itemList}
			numColumns={columns}
			removeClippedSubviews={true}
			contentContainerStyle={styles.container}
			style={styles.container}
			renderItem={({ item, index }: any) => {
				return (
					<FlatListItem
						key={index}
						index={index}
						title={item.item.title} 
						onPress={() => props.onPress ? props.onPress(item) : null} /> 
				);
			}}
			keyExtractor={(item: any) => item.item.index }
		/>
	);
};

export default FlatList;