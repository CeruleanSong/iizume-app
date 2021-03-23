import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import NativeContainer from '../../components/NativeContainer';
import NativeHeader from '../../components/NativeHeader';

interface LibraryProps {
	navigation: MaterialBottomTabScreenProps<any>;
}

const LibraryTab = (_props: LibraryProps) => {
	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={_props.navigation}
				title='Library' />
			<SafeAreaView>
				<Text>Library Tab!</Text>
			</SafeAreaView>
		</NativeContainer>
	);
};

export default LibraryTab;
