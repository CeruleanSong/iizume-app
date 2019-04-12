/**
 * SettingsComponent.ts
 * Handles UI interactions with manga sources.
 * Should handle Ui interactions for searching & saving manga.
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
 * Screen that lists manga from different sources (also home screen)
 *
 * @class GalleryCompenent
 * @classdesc Screen for adding manga from different sources
 * @constructor
 *
 * @function render Renders a list of manga sources
 *
 * @prop
 */
class GalleryCompenent extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Gallery Tab!</Text>
			</View>
		);
	}
}

export {
	GalleryCompenent,
}
