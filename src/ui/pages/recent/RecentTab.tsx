import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native-paper';

import Container from '../../components/Container';
import NativeContainer from '../../components/NativeContainer';
import NativeHeader from '../../components/NativeHeader';

interface UpdatesProps {
	navigation: StackNavigationProp<any>;
}

const RecentTab = (_props: UpdatesProps) => {
	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={_props.navigation}
				title='Recent' />
			<Container>
				<Text>Recent Tab!</Text>
			</Container>
		</NativeContainer>
	);
};

export default RecentTab;
