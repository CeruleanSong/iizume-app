import { GestureResponderEvent } from 'react-native';
import React from 'react';
import { List, TouchableRipple } from 'react-native-paper';

interface NativeFlatListItemProps {
	item: {
		title: string;
		index: number;
	};
	pressFunc: (event: GestureResponderEvent) => void;
}

const NativeFlatListItem = (_props: NativeFlatListItemProps) => {
	return (
		<TouchableRipple
			onPress={(event) => _props.pressFunc(event)}>
			<List.Item
				style={{ elevation: 8, marginVertical: 8 }}
				title={_props.item?.title} />
		</TouchableRipple>
	);
};

export default NativeFlatListItem;
