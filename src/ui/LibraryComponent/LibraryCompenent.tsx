/**
 * This soruce code is for management of the library component
 * 
 * The library component should display all saved manga, and Allows users to mange saved manga.
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ActionButton from 'react-native-action-button';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { routes } from "../../constants/Component.json";

/**
 * Screen that shows all of the saved manga (also home screen)
 *
 * @class LibraryCompenent
 * @classdesc Lists saved manga, and main screen for app
 * @constructor
 *
 * @function {React.Component} render Renders saved manga and a action button for navigation
 *
 * @prop
 */
class LibraryCompenent extends React.Component {
	public render() {
		return (
			<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
				{
					/*************** Main Contents ***************/
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Text>Library Tab!</Text>
					</View>
				}
				<ActionButton buttonColor="#ffb7c5" size={48}
					renderIcon={(active) => (active) ?
						(<Icon name="expand-less" style={buttonStyle.actionButtonIcon}/>) :
						(<Icon name="expand-less" style={buttonStyle.actionButtonIcon}/>)}
					degrees={180}>
						/*************** action buttons ***************/
						// Gallery
						<ActionButton.Item buttonColor='#ffca95' title="Gallery" size={36}
							onPress={() => this.props.navigation.push(`${routes[1].name}`)}>
							<Icon name="library-add" style={buttonStyle.actionButtonIcon} />
						</ActionButton.Item>
						// Settings
						<ActionButton.Item buttonColor='#faf498' title="Settings" size={36}
							onPress={() => this.props.navigation.push(`${routes[2].name}`)}>
							<Icon name="settings" style={buttonStyle.actionButtonIcon} />
						</ActionButton.Item>
				</ActionButton>
			</View>
		);
	}
}

/*************** Styles ***************/
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
	LibraryCompenent,
};
