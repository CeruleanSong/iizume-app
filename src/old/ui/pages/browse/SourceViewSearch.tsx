/**
 * Library.ts
 * - Handles interactions with manga saved in library.
 * - Handles navigation to other routes.
 * Notes:
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import { NavigationStackProp } from 'react-navigation-stack';
import { getLatest, getManga } from '../../../core/source/Source';
import { Sources, SourceType } from '../../../core/source/SourceList';
import { Preview } from '../../../lib/manga/Preview';
import Shelf from '../../components/Shelf';

interface BrowseState {
	list: Preview[];
	page: number;
	refreshing: boolean;
}

interface BrowseProps {
	navigation: NavigationStackProp;
}

class BrowseTabView extends Component<BrowseProps, BrowseState> {
	constructor(props: any){
		super(props);
		this.state = {
			list: [],
			page: 1,
			refreshing: false,
		};
	}

	public async componentDidMount() {
		await getLatest(Sources.mangasee).then((res) => {
			this.setState({list: res ?? []});
		});
	}

	public render() {
		const onScrollHandler = async () => {
			if (!this.state.refreshing) {
				this.setState({page: this.state.page, list: this.state.list, refreshing: true});
				const res = await getLatest(Sources.mangasee, this.state.page + 1);

				const list = this.state.list?.concat(res ? res : []);

				this.setState({page: this.state.page + 1, list, refreshing: false});
			}
		};

		const selectedManga = async (source: SourceType, item: Preview) => {
			const manga = await getManga(Sources.mangasee, item);
			this.props.navigation.navigate('MangaView', { manga });
		};

		return (
			<View>
				<Shelf list={this.state.list} onReachEnd={onScrollHandler} onSelect={(item) => selectedManga(Sources.mangasee, item)}/>
			</View>
		);
	}
}

export default BrowseTabView;
