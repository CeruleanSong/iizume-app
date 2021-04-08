import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native';

import Container from '@components/Container';
import Header from '@components/header/Header';

interface Props {
	navigation: StackNavigationProp<any>;
}
const Browse = (props: Props) => {
	return (
		<Container cover>
			<Header
				navigation={props.navigation}
				right={[
					<Ionicons key={0} color='#3d3d3d' size={28} name='settings-outline' />
				]}
				title='Browse' />
			<Text>Browse Tab!</Text>
		</Container>
	);
};

export default Browse;
