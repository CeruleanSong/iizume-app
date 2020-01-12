/**
 * Browse.ts
 * - Page to handle browsing new manga releases
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { getSources } from '../../../core/net/api/Source';
import { Preview } from '../../../lib/manga/Preview';
import StyledFlatList from '../../components/StyledFlatList';
import StyledHeader from '../../components/StyledHeader';

/* props */
interface BrowseProps {
	navigation: NavigationStackProp;
}

interface BrowseState {
	list: Preview[];
	page: number;
}

/* component */
class Browse extends React.Component<BrowseProps, BrowseState> {

	constructor(props: BrowseProps){
		super(props);
		this.state = {
			list: [],
			page: 1,
		};
	}

	public async componentDidMount() {
		await getSources().then((res) => {
			this.setState({list: res ?? []});
		});
	}

	public render(){

		const pushBrowser = (selected: any) => {
			this.props.navigation.navigate('BrowseSource', { source: selected });
		};

		return (
			<View style={styles.container}>
				{ /*************** Main Component ***************/ }
				<StyledHeader text="Browse" showBackButton={false}/>
				<View style={styles.body}>
					<StyledFlatList list={this.state.list} onSelect={pushBrowser} />
				</View>
			</View>
		);
	}
}

/* styles */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default Browse;
