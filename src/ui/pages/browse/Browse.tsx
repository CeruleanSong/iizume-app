/**
 * Browse.ts
 * - Page to handle browsing new manga releases
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { getLatest } from '../../../core/source/Source';
import { Sources, SourceType } from '../../../core/source/SourceList';
import { Preview } from '../../../lib/manga/Preview';
import StyledHeader from '../../components/StyledHeader';
import StyledStaticFlatList from '../../components/StyledStaticFlatList';

interface BrowseState {
	list: Preview[];
	page: number;
}

interface BrowseProps {
	navigation: NavigationStackProp;
}

/**
 * Component for saved manga
 */
class Browse extends Component<BrowseProps, BrowseState> {
	constructor(props: BrowseProps){
		super(props);
		this.state = {
			list: [],
			page: 1,
		};
	}

	public async componentDidMount() {
		await getLatest(Sources[2], this.state.page).then((res) => {
			this.setState({list: res ?? []});
		});
	}

	public render() {

		const pushBrowser = (selected: SourceType) => {
			this.props.navigation.push('BrowseSource', {source: selected});
		};

		return (
			<View style={{height: '100%'}} >
				<StyledHeader style={styles.Footer} text="Search Manga">
					<View style={{width: "50%"}}>
						{/* <StyledButton onPress={() => this.props.navigation.navigate(Routes.Library.name)} text="Back to library"></StyledButton> */}
					</View>
				</StyledHeader>
				{/* <Shelf list={this.state.list} onReachEnd={onScrollHandler} onSelect={(item) => console.warn("Pressed", item.id ?? item.title)}/> */}
				<StyledStaticFlatList list={Sources} onSelect={pushBrowser} />
			</View>
		);
	}
}

/*************** Styles ***************/

const styles = StyleSheet.create({
	Shelf: {
		position: 'absolute',
		top: 0,

		height: '95%',
		width: '100%',
	},
	Footer: {
		position: 'absolute',
		top: '90%',

		height: '5%',
		width: '100%',
	},
});

export default Browse;
