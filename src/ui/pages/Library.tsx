/**
 * Library.ts
 * - Handles interactions with manga saved in library.
 * - Handles navigation to other routes.
 * Notes:
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import StyledHeader from '../components/StyledHeader';

interface LibraryProps {
	navigation: NavigationStackProp;
}

/**
 * Component for saved manga
 */
class Library extends React.Component<LibraryProps> {

	constructor(props: LibraryProps){
		super(props);
		this.state = {
			savedManga: [],
		};
	}

	public render(){
		return (
			<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
				{ /*************** Main Component ***************/ }
				<StyledHeader text="Library" showBackButton={false}>
					<View style={{width: "50%"}}>
					</View>
				</StyledHeader>
			</View>
		);
	}
}

export default Library;