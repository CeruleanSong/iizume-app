/**
 * Gallery.ts
 * - Handles interactions w/ manga sources.
 * Notes:
 * - N/A
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import React, { useEffect, useState, Component, FunctionComponent, Suspense } from 'react';
import {unstable_createResource} from 'react-cache';
import { Text, View } from 'react-native';
import { getLatest } from '../../core/source/Source';
import { Sources } from '../../core/source/SourceList';
import { Preview } from '../../lib/manga/Preview';
import { Shelf } from '../Shared/Shelf';

const Fetcher = unstable_createResource(() =>
	getLatest(Sources.mangasee).then((res) => res));

// const getData = () => Fetcher.read();

const previewList: Preview[] | null = null;

/**
 * Component for saved manga
 */
const Gallery = () => { // const Gallery = ({Source}) => {
	return class extends Component {
		public state = {
			list: previewList,
			page: 1,
		};

		public async componentDidMount() {
			await getLatest(Sources.mangasee, this.state.page).then((res) => {
				this.setState({list: res});
			});
		}

		public render() {
			const onScrollHandler = async () => {
				await getLatest(Sources.mangasee, this.state.page).then((res) => {
					const list = this.state.list?.concat(res ? res : []);
					this.setState({page: this.state.page + 1, list});
					// console.log(res);
				});
			};

			// const eval = () => {
			// 	onScrollHandler().then((res) => {
			// 		//
			// 	});
			// 	return 0;
			// };

			return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Gallery Tab!</Text>
				<Shelf list={this.state.list} state={this.state} updateFunc={onScrollHandler} />
			</View>
		);
		}
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Gallery Tab!</Text>
			<Suspense fallback={<div>LOADING!</div>}>
				{/* <Shelf list={getData()} /> */}
			</Suspense>
		</View>
	);
};

export {
	Gallery,
};
