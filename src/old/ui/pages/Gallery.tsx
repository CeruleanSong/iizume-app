/**
 * Gallery.ts
 * - Handles interactions w/ manga sources.
 * Notes:
 * - N/A
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface GalleryProps {
	navigation: NavigationStackProp;
}

/**
 * Component for saved manga
 */
const Gallery: React.FC<GalleryProps> = (props: GalleryProps) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Gallery Tab!</Text>
		</View>
	);
};

export default Gallery;
