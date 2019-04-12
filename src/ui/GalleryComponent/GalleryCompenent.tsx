/**
 * This soruce code is for management of the gallery component
 * 
 * The gallery component should display all availible sources for veiwing manga.
 * Sources should enable users to search for, and if the wish to download and save new manga.
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
 * @function {React.Component} render Renders a list of manga sources
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
