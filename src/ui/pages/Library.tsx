/**
 * Library.ts
 * - Handles interactions with manga saved in library.
 * - Handles navigation to other routes.
 * Notes:
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationStackProp } from 'react-navigation-stack';

import StyledButton from '../components/StyledButton';
import StyledHeader from '../components/StyledHeader';

import { getLatest } from '../../core/source/Source';
import { Sources } from '../../core/source/SourceList';
import { Preview } from '../../lib/manga/Preview';
import { AppRoutes } from "../AppConfig";
import Shelf from '../components/Shelf';
import ShelfItem from '../components/ShelfItem';

interface LibraryProps {
	navigation: NavigationStackProp;
}

interface LibraryState {
	savedManga: Preview[];
}

/**
 * Component for saved manga
 */
class Library extends React.Component<LibraryProps> {

	constructor(props: LibraryProps){
		super(props);
		this.state = {
			savedManga: [],
		};
	}

	public render(){
		return (
			<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
				{ /*************** Main Component ***************/ }
				<StyledHeader text="Saved Manga">
					<View style={{width: "50%"}}>
						{/* height: 40 */}
						{/* <StyledButton onPress={() => this.props.navigation.navigate(Routes.Browse.name)} text="Browse new manga"></StyledButton> */}
					</View>
				</StyledHeader>
				{ /*************** Navigation ***************/ }
				<ActionButton buttonColor="#ffb7c5" size={largeButtonRadius}
					renderIcon={(active) => (active) ?
						(<Icon name="expand-less" style={styles.actionButtonIcon}/>) :
						(<Icon name="expand-less" style={styles.actionButtonIcon}/>)}
					degrees={rotation}>

					<ActionButton.Item buttonColor='#e05c74' title="Updates" size={smallButtonRadius}
						onPress={() => this.props.navigation.navigate(AppRoutes.Updates.name)}>
						<Icon name="new-releases" style={styles.actionButtonIcon} />
					</ActionButton.Item>

					<ActionButton.Item buttonColor='#e05c74' title="History" size={smallButtonRadius}
						onPress={() => this.props.navigation.navigate(AppRoutes.Updates.name)}>
						<Icon name="history" style={styles.actionButtonIcon} />
					</ActionButton.Item>

					<ActionButton.Item buttonColor='#e05c74' title='Browse' size={smallButtonRadius}
						onPress={() => this.props.navigation.navigate(`${AppRoutes.Browse.name}`)}>
						<Icon name="search" style={styles.actionButtonIcon} />
					</ActionButton.Item>

					<ActionButton.Item buttonColor='#e05c74' title="Settings" size={smallButtonRadius}
						onPress={() => this.props.navigation.navigate(AppRoutes.Settings.name)}>
						<Icon name="settings" style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</View>
		);
	}
}

/*************** Styles ***************/

const largeButtonRadius = 48;
const smallButtonRadius = 36;
const rotation = 180;

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
});

export default Library;