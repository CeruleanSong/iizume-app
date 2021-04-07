import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import NativeContainer from '../../components/NativeContainer';
import Shelf from '../../components/Shelf';
import { getLatest } from '../../../lib/core/net/QuerySource';

interface BrowseSourceProps {
	navigation: StackNavigationProp<any>;
	source: any;
}

const BrowseSourceTabLatest = (props: BrowseSourceProps) => {
	const [ page, setPate ] = React.useState(1);
	const [ refreshing, setRefreshing ] = React.useState(false);
	const [ list, setList ] = React.useState([]);
	
	const source = props.source;

	useEffect(() => {
		getLatest(source.source_id, page).then((result) => {
			setList(result.manga);
		});
	}, [ ]);
	
	return (
		<NativeContainer maxHeight>
			<Shelf list={list} />
		</NativeContainer>
	);
};

export default BrowseSourceTabLatest;