import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import NativeContainer from '../../components/NativeContainer';

interface BrowseSourceProps {
	navigation: StackNavigationProp<any>;
	route: any;
}

const BrowseSourceTabSearch = (props: BrowseSourceProps) => {
	const source = props.route.params.source;

	return (
		<NativeContainer maxHeight>
		</NativeContainer>
	);
};

export default BrowseSourceTabSearch;