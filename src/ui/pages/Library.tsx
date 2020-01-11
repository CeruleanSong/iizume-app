/**
 * Library.ts
 * - Handles interactions with manga saved in library.
 * - Handles navigation to other routes.
 * Notes:
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

/* props */
interface LibraryProps {
	navigation: NavigationStackProp;
}

/* component */
class Library extends React.Component<LibraryProps> {

	constructor(props: LibraryProps){
		super(props);
		this.state = {
			savedManga: [],
		};
	}

	public render(){
		return (
			<View style={styles.container}>
				{ /*************** Main Component ***************/ }
				{/* <StyledHeader text="Library" showBackButton={false}>
					<View style={{width: "50%"}}>
					</View>
				</StyledHeader> */}
				<Text>Library Tab!</Text>
			</View>
		);
	}
}

/* styles */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Library;
