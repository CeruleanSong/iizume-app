import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native-paper';

import Container from '../../components/Container';
import NativeContainer from '../../components/NativeContainer';
import NativeHeader from '../../components/NativeHeader';

interface HistoryProps {
	navigation: StackNavigationProp<any>;
}

const HistoryTab = (_props: HistoryProps) => {
	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={_props.navigation}
				title='History' />
			<Container>
				<Text>History Tab!</Text>
			</Container>
		</NativeContainer>
	);
};

export default HistoryTab;
