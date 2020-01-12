/**
 * BrowseTabLatest.ts
 * Notes:
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { getLatest, getSeries } from '../../../core/net/api/Source';
import { Preview } from '../../../lib/manga/Preview';
import Shelf from '../../components/Shelf';

interface BrowseState {
	list: Preview[];
	page: number;
	refreshing: boolean;
}

interface BrowseProps {
	navigation: NavigationStackProp;
	source: any;
}

class BrowseTabLatest extends Component<BrowseProps, BrowseState> {
	constructor(props: any){
		super(props);
		this.state = {
			list: [],
			page: 1,
			refreshing: false,
		};
	}

	public async componentDidMount() {
		await getLatest(this.props.source.root, this.state.page).then((res: any) => {
			this.setState({list: res ?? []});
		});
	}

	public render() {

		const onScrollHandler = async () => {
			if (!this.state.refreshing) {
				this.setState({page: this.state.page, list: this.state.list, refreshing: true});
				const res = await getLatest(this.props.source.root, this.state.page + 1);

				const list = this.state.list?.concat(res ? res : []);

				this.setState({page: this.state.page + 1, list, refreshing: false});
			}
		};

		const selectedManga = async (item: Preview) => {
			const manga = await getSeries(item.url);
			this.props.navigation.navigate('MangaView', { manga });
		};

		return (
			<View style={styles.scene}>
				<Shelf list={this.state.list} onReachEnd={onScrollHandler}
				onSelect={(item) => selectedManga(item)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	scene: {
	  flex: 1,
	},
});

export default BrowseTabLatest;
