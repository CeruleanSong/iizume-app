import React from 'react';
import { Text, View } from 'react-native';

/**
 * Screen for managing settings
 *
 * @class SettingsTab
 * @classdesc Shows different settings, and allows user to edit them
 * @constructor
 *
 * @function {React.Component} render Renderes settings, and other app informaiton
 *
 * @prop
 */
class SettingsTab extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings Tab!</Text>
			</View>
		);
	}
}

export {
	SettingsTab
}
