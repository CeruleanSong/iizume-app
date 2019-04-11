import React from 'react';
import { Text, View } from 'react-native';

/**
 * Screen that lists manga from different sources (also home screen)
 *
 * @class GalleryTab
 * @classdesc Screen for adding manga from different sources
 * @constructor
 *
 * @function {React.Component} render Renders a list of manga sources
 *
 * @prop
 */
class GalleryTab extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Gallery Tab!</Text>
			</View>
		);
	}
}

export {
	GalleryTab
}
