 /**
 * SettingsComponent.ts
 * Handles UI interactions in the settings component. 
 * 
 * Notes: 
 * - N/A
 * 
 * Created by Elias Mawa on 19-04-11
 * Last edit by Elias Mawa on 19-04-11
 */

import React from 'react';
import { Text, View } from 'react-native';

/**
 * Screen for managing settings
 *
 * @class SettingsComponent
 * @classdesc Shows different settings, and allows user to edit them
 * @constructor 
 *
 * @function render Renderes settings, and other app informaiton
 *
 * @prop
 */
class SettingsComponent extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings Tab!</Text>
			</View>
		);
	}
}

export {
	SettingsComponent
}
