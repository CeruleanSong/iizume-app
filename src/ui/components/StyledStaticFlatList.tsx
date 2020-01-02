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
import { SourceType } from "../../core/source/SourceList";
import ShelfItem from "../components/ShelfItem";
import StyledStaticFlatListItem from "./StyledStaticFlatListItem";

interface StyledStaticFlatListProps {
	list: SourceType[];
	onSelect: (selected: SourceType) => void;
	style?: ViewStyle;
	textStyle?: TextStyle;
}

const StyledStaticFlatList = (props: StyledStaticFlatListProps) => {
	/**** BIGGEST HACK OF THE CENTURTY ****/
	const itemList: any = [];

	const itemList0 = Object.keys(props.list).map((key: any, i: any) => {
		return { [i]: props.list[key] };
	});

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
			renderItem={({ item, index }: any) => <StyledStaticFlatListItem key={index} title={item.name} onSelect={() => props.onSelect(item)} /> }
			keyExtractor={(item, index) => index.toString() }
		/>
	);
};

/*************** style ***************/

const refreshThreshold = .1;

const cols = 1;

const styles = StyleSheet.create({
	container: {
		// width: "100%",
	},
	shelf: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',

		// minWidth: '100%',
	},
});

export default StyledStaticFlatList;