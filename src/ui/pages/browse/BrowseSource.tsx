/**
 * Browse.ts
 * - Page to handle browse searching
 * Notes:
 * - N/A
 * Created 20-01-01
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { NavigationStackProp } from 'react-navigation-stack';
import StyledHeader from '../../components/StyledHeader';
import BrowseTabLatest from './BrowseTabLatest';
import BrowseTabSearch from './BrowseTabSearch';

interface BrowseSourceProps {
	navigation: NavigationStackProp;
}

const initialLayout = { width: Dimensions.get('window').width };

const BrowseSource: React.FC<BrowseSourceProps> = (props: BrowseSourceProps) => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'latest', title: 'Latest' },
		{ key: 'search', title: 'Search' },
	]);

	const Search = () => (
		<BrowseTabSearch navigation={props.navigation} source={props.navigation.state?.params?.source}  />
	);

	const Latest = () => (
		<BrowseTabLatest navigation={props.navigation} source={props.navigation.state?.params?.source}  />
	);

	const renderScene = SceneMap({
		latest: Latest,
		search: Search,
	});

	return (
		<View style={{height: "100%"}}>
		<StyledHeader text={`${props.navigation.state?.params?.source?.name ?? "Unknown"}`} />
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={(num: number) => setIndex(num)}
				initialLayout={initialLayout}
				swipeEnabled={true}
				renderTabBar={(tabProps) => <TabBar {...tabProps}
					inactiveColor='#6d6d6d'
					activeColor='#ff6b87'
					style={{ backgroundColor: "transparent" }} />}
				/>
		</View>
	);
};

export default BrowseSource;
