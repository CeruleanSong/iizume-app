/**
 * ListView.ts
 * - Handles interactions w/ manga sources.
 * Notes:
 * - Find a better way to turn the source list into array?
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import React from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import StyledFlatListItem from "./StyledFlatListItem";

interface StyledStaticFlatListProps {
	list: any[];
	onSelect: (selected: any) => void;
	style?: ViewStyle;
	textStyle?: TextStyle;
}

const StyledFlatList = (props: StyledStaticFlatListProps) => {
	/**** BIGGEST HACK OF THE CENTURTY ****/
	const itemList: any = [];

	for (const x in props.list) {
		if (x) {
			itemList.push(props.list[x]);
		}
	}
	/**** ^^^BIGGEST HACK OF THE CENTURTY^^^ ****/

	return (
		// <View/>
		<FlatList
			data={itemList}
			numColumns={cols}
			removeClippedSubviews={true}
			contentContainerStyle={styles.container}
			renderItem={({ item, index }: any) => <StyledFlatListItem key={index} title={item.name} onSelect={() => props.onSelect(item)} /> }
			keyExtractor={(item, index) => index.toString() }
		/>
	);
};

const cols = 1;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		// paddingTop: '24px',
		paddingHorizontal: '4%',
	},
});

export default StyledFlatList;
