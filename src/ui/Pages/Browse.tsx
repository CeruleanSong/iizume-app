/**
 * Browse.ts
 * - Page to handle browsing new manga releases
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import React, { useEffect, useState, Component, FunctionComponent, Suspense } from 'react';
import {unstable_createResource} from 'react-cache';
import { Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { getLatest } from '../../core/source/Source';
import { Sources } from '../../core/source/SourceList';
import { Preview } from '../../lib/manga/Preview';
import Shelf from '../Shared/Shelf';
import StyledHeader from '../Components/StyledHeader';
import StyledButton from '../Components/StyledButton';
import Routes from '../RouteConfig';

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
		await getLatest(Sources.mangasee, this.state.page).then((res) => {
			this.setState({list: res ?? []});
		});
	}

	public render() {
		const onScrollHandler = async () => {
			const res = await getLatest(Sources.mangasee, this.state.page);
			const list = this.state.list?.concat(res ?? []);
			this.setState({page: this.state.page + 1, list});
		};

		return (
			<View>
				<StyledHeader text="Latest Releases">
					<View style={{width: "50%", height: 40}}>
						<StyledButton onPress={() => this.props.navigation.navigate(Routes.Library.name)} text="Back to library"></StyledButton>
					</View>
				</StyledHeader>
				<Shelf list={this.state.list} onReachEnd={onScrollHandler} onSelect={(item) => console.warn("Pressed", item.id ?? item.title)}/>
			</View>
		);
	}
}

export default Browse;
