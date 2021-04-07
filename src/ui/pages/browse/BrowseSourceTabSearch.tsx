import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import NativeContainer from '../../components/NativeContainer';
import { getLatest } from '../../../lib/core/net/QuerySource';
interface BrowseSourceProps {
	navigation: StackNavigationProp<any>;
	source: any;
}

const BrowseSourceTabSearch = (props: BrowseSourceProps) => {
	const [ page, setPate ] = React.useState(1);
	const [ refreshing, setRefreshing ] = React.useState(false);
	const [ list, setList ] = React.useState([]);
	
	const source = props.source;

	useEffect(() => {
		getLatest(source.source_id, page).then((result) => {
			console.log(result);
		});
	}, [ ]);

	return (
		<NativeContainer maxHeight>
		</NativeContainer>
	);
};

export default BrowseSourceTabSearch;