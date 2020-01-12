/**
 * BrowseTabSearch.ts
 * Notes:
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { NavigationStackProp } from 'react-navigation-stack';
import { getLatest } from '../../../core/net/api/Source';
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

class BrowseTabSearch extends Component<BrowseProps, BrowseState> {
	constructor(props: any){
		super(props);
		this.state = {
			list: [],
			page: 1,
			refreshing: false,
		};
	}

	public render() {
		return (
			<View>
				<Text>
					{this.props.source.root}
				</Text>
			</View>
		);
	}
}

export default BrowseTabSearch;
