/**
 * Library.ts
 * - Handles interactions with manga saved in library.
 * - Handles navigation to other routes.
 * Notes:
 * - Linter say this.props.navigation does not exit in action buttons, Unsure why but works as intended
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ActionButton from 'react-native-action-button';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { getLatest } from '../../core/source/Source';
import { Sources } from '../../core/source/SourceList';
import { Preview } from '../../lib/manga/Preview';
import { Routes } from "../RouteConfig";
import { Shelf } from '../Shared/Shelf';
import { ShelfItem } from '../Shared/ShelfItem';

/**
 * Component for saved manga
 */
const Library = (props: any) => {

	return (
		<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
			{
				/*************** Main Component ***************/
				// justifyContent: 'center', alignItems: 'center'
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Text>Library Tab!</Text>
					{/* <Shelf  /> */}
				</View>

			}
			{
				/*************** Navigation ***************/
				<ActionButton buttonColor="#ffb7c5" size={largeButtonRadius}
					renderIcon={(active) => (active) ?
						(<Icon name="expand-less" style={buttonStyle.actionButtonIcon}/>) :
						(<Icon name="expand-less" style={buttonStyle.actionButtonIcon}/>)}
					degrees={rotation}>

					<ActionButton.Item buttonColor='#ffca95' title="Gallery" size={smallButtonRadius}
						onPress={() => props.navigation.push(`${Routes.Gallery.name}`)}>
						<Icon name="library-add" style={buttonStyle.actionButtonIcon} />
					</ActionButton.Item>

					<ActionButton.Item buttonColor='#faf498' title="Settings" size={smallButtonRadius}
						onPress={() => props.navigation.push(`${Routes.Settings.name}`)}>
						<Icon name="settings" style={buttonStyle.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			}
		</View>
	);
};

/*************** Styles ***************/

const largeButtonRadius = 48;
const smallButtonRadius = 36;
const rotation = 180;

const buttonStyle = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
});

// const buttonChildStyle = StyleSheet.create({
// 	actionButtonIcon: {
// 		fontSize: 20,
// 		height: 16,
// 		color: 'white',
// 	},
// });

export {
	Library,
};