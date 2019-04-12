 /**
  * SettingsComponent.ts
  * Handles UI interactions with library manga.
  * Main page of the app, navigation to other should main components managed here.
  *
  * Notes:
  * - Linter say this.props.navigation does not exit in action buttons, Unsure why but works as intended
  *
  * Created by Elias Mawa on 19-04-11
  * Last edit by Elias Mawa on 19-04-11
  */

import React from 'react';
import { StyleSheet, Text, View, Settings } from 'react-native';

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
 * @function render Renders saved manga and a action button for navigation
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
				{
					/*************** navigation action button ***************/
					<ActionButton buttonColor="#ffb7c5" size={48}
						renderIcon={(active) => (active) ?
							(<Icon name="expand-less" style={buttonStyle.actionButtonIcon}/>) :
							(<Icon name="expand-less" style={buttonStyle.actionButtonIcon}/>)}
						degrees={180}>

							<ActionButton.Item buttonColor='#ffca95' title="Gallery" size={36}
								onPress={() => this.props.navigation.push(`${routes.gallery.name}`)}>
								<Icon name="library-add" style={buttonStyle.actionButtonIcon} />
							</ActionButton.Item>

							<ActionButton.Item buttonColor='#faf498' title="Settings" size={36}
								onPress={() => this.props.navigation.push(`${routes.settings.name}`)}>
								<Icon name="settings" style={buttonStyle.actionButtonIcon} />
							</ActionButton.Item>
					</ActionButton>
				}
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
