import React from 'react';
import { Text } from 'react-native-paper';

import Container from '../../components/Container';
import NativeContainer from '../../components/NativeContainer';
import NativeHeader from '../../components/NativeHeader';
import { StackNavigationProp } from '@react-navigation/stack';

interface LibraryProps {
	navigation: StackNavigationProp<any>;
}

const LibraryTab = (_props: LibraryProps) => {
	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={_props.navigation}
				title='Library' />
			<Container>
				<Text>Library Tab!</Text>
			</Container>
		</NativeContainer>
	);
};

export default LibraryTab;
