/**
 * Gallery.ts
 * - Handles interactions w/ manga sources.
 * Notes:
 * - N/A
 * Created 19-12-28
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

/* props */
interface BrowseProps {
	navigation: NavigationStackProp;
}

/* component */
class Browse extends React.Component<BrowseProps> {

	constructor(props: BrowseProps){
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
				<Text>Browse Tab!</Text>
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

export default Browse;
