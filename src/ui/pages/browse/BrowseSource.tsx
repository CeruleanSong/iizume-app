import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import BrowseSourceTabLatest from './BrowseSourceTabLatest';
import BrowseSourceTabSearch from './BrowseSourceTabSearch';
import NativeContainer from '../../components/NativeContainer';
import NativeHeader from '../../components/NativeHeader';

interface BrowseSourceProps {
	navigation: StackNavigationProp<any>;
	route: any;
}

const BrowseSource = (props: BrowseSourceProps) => {
	const source = props.route.params.source;

	const [ index, setIndex ] = React.useState(0);
	const [ routes ] = React.useState([
		{ key: 'latest', title: 'Latest' },
		{ key: 'search', title: 'Search' }
	]);

	const Search = () => (
		<BrowseSourceTabSearch navigation={props.navigation} source={source}  />
	);

	const Latest = () => (
		<BrowseSourceTabLatest navigation={props.navigation} source={source}  />
	);

	const renderScene = SceneMap({
		latest: Latest,
		search: Search
	});

	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={props.navigation}
				title={source.display_title} flat/>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={(num: number) => setIndex(num)}
				swipeEnabled={true}
				renderTabBar={(tabProps) =>
					<TabBar {...tabProps}
						inactiveColor='#828282'
						activeColor='#f3f3f3'
						indicatorStyle={{ borderBottomColor: 'red' }}
						style={{ backgroundColor: '#0c0c0c', flexWrap: 'nowrap', overflow: 'hidden' }} 
					/>}
			/>
		</NativeContainer>
	);
};

export default BrowseSource;
