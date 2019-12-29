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
import Shelf from '../Shared/Shelf';

/**
 * Component for saved manga
 */
const Gallery = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Shelf></Shelf>
		</View>
	);
};

export default Gallery;
