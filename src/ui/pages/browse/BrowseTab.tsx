import { GestureResponderEvent } from 'react-native';
import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import NativeContainer from '../../components/NativeContainer';
import NativeFlatList from '../../components/NativeFlatList';
import NativeHeader from '../../components/NativeHeader';

interface BrowseProps {
	navigation: MaterialBottomTabScreenProps<any>;
}

const BrowseTab = (_props: BrowseProps) => {
	const pushBrowser = (_event: GestureResponderEvent, _item: any) => {
		return null;
	};

	const items = [ 'hello', 'world', 'hello', 'darling' ];

	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={_props.navigation}
				title='Browse' />
			<SafeAreaView>
				<NativeFlatList pressFunc={pushBrowser} items={items} />
			</SafeAreaView>
		</NativeContainer>
	);
};

export default BrowseTab;
