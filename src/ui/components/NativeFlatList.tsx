import { FlatList } from 'react-native-gesture-handler';
import { GestureResponderEvent } from 'react-native';
import React from 'react';

import NativeFlatListItem from './NativeFlatListItem';
import { Divider, List } from 'react-native-paper';
 
interface NativeFlatListProps {
	pressFunc: (event: GestureResponderEvent, _item: any) => void;
	items: any[];
}

const cols = 1;

const NativeFlatList = (_props: NativeFlatListProps) => {
	 const itemList = [];
 
	 for (const _index in _props.items) {
		itemList.push({ 
			title: _props.items[_index],
			index: _index
	 	});
	 }

	 const renderItem = ({ item, index }: any) => {
		return (
			<>
				<NativeFlatListItem
					key={index}
					item={item}
					pressFunc={(event) => _props.pressFunc(event, item)} />
				<Divider  />
			</>
		);
	 };
 
	 const keyExtractor = ({ index }: any) => {
		return index.toString();
	 };

	 return (
		<List.Section>
			<FlatList
				data={itemList}
				numColumns={cols}
				removeClippedSubviews={true}
				renderItem={renderItem}
				keyExtractor={keyExtractor } />
		</List.Section>
	 );
};
 
export default NativeFlatList;
 