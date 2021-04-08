/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import Container from '@components/Container';
import Header from '@components/header/Header';
import Shelf from '@components/shelf/Shelf';
import { getLatest } from '@/lib/core/net/QuerySource';

interface Props {
	navigation: StackNavigationProp<any>;
	route: any;
}

const BrowseSource = (props: Props) => {
	const source = props.route.params.source;

	const [ page, setPage ] = React.useState(1);
	const [ refreshing, setRefreshing ] = React.useState(false);
	const [ list, setList ] = React.useState([]);

	useEffect(() => {
		getLatest(source.source_id, page).then((result) => {
			setList(result.manga);
		});
	}, [ ]);
	
	return (
		<Container>
			<Header
				navigation={props.navigation}
				title={source.display_title}/>
			<Shelf list={list} />
		</Container>
	);
};

export default BrowseSource;
