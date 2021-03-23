import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

import NativeContainer from '../../components/NativeContainer';
import NativeHeader from '../../components/NativeHeader';

interface UpdatesProps {
	navigation: MaterialBottomTabScreenProps<any>;
}

const RecentTab = (_props: UpdatesProps) => {
	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={_props.navigation}
				title='Updates' />
			<SafeAreaView>
				<Text>Updates Tab!</Text>
			</SafeAreaView>
		</NativeContainer>
	);
};

export default RecentTab;
