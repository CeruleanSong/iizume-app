import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import NativeContainer from '../../components/NativeContainer';
import NativeHeader from '../../components/NativeHeader';

interface HistoryProps {
	navigation: MaterialBottomTabScreenProps<any>;
}

const HistoryTab = (_props: HistoryProps) => {
	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={_props.navigation}
				title='History' />
			<SafeAreaView>
				<Text>History Tab!</Text>
			</SafeAreaView>
		</NativeContainer>
	);
};

export default HistoryTab;
