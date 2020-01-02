/**
 * Browse.ts
 * - Page to handle browse searching
 * Notes:
 * - N/A
 * Created 20-01-01
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { NavigationStackProp } from 'react-navigation-stack';
import StyledHeader from '../../components/StyledHeader';
import BrowseTabView from './SourceViewSearch';

interface BrowseSourceProps {
	navigation: NavigationStackProp;
}

const initialLayout = { width: Dimensions.get('window').width };

const BrowseSource: React.FC<BrowseSourceProps> = (props: BrowseSourceProps) => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'search', title: 'Search' },
		{ key: 'latest', title: 'Latest' },
		{ key: 'hot', title: 'Hot' },
	]);

	const Search = () => (
		<BrowseTabView />
	);

	const renderScene = SceneMap({
		search: Search,
		latest: Search,
		hot: Search,
	});

	console.warn(props.navigation);

	return (
		<View style={{height: "100%"}}>
			<StyledHeader text={`Search Manga (Source: ${props.navigation.state?.params?.source?.name ?? "Unknown"})`} />
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={initialLayout}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
});

export default BrowseSource;