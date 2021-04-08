import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import Container from '@components/Container';
import FlatList from '@components/flatlist/FlatList';
import Header from '@components/header/Header';
import { getSourceList } from '@/lib/core/net/QuerySource';

interface Props {
	navigation: StackNavigationProp<any>;
}

const Browse = (props: Props) => {
	const [ sourceList, useSourceList ] = React.useState<any[]>([]);
	const [ sourceConfig, useSourceConfig ] = React.useState<string[]>([]);

	React.useEffect(() => {
		getSourceList().then(({ sources }) => {
			const source_list = [];
			const source_config = [];
			for(const i in sources) {
				source_list.push({ title: sources[i].display_title });
				source_config[parseInt(i)] = sources[i];
			}
			useSourceList(source_list);
			useSourceConfig(source_config);
		});
	}, []);

	const pushBrowser = ({ key }: any) => {
		props.navigation.push('BrowseSource', { source: sourceConfig[key] });
	};

	return (
		<Container cover>
			<Header
				navigation={props.navigation}
				title='Browse' />
			<FlatList items={sourceList} onPress={pushBrowser} />
		</Container>
	);
};

export default Browse;
