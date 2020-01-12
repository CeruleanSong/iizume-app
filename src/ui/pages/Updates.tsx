/**
 * Updates.ts
 * - Handles application settings.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import StyledHeader from '../components/StyledHeader';

/* props */
interface UpdatesProps {
	navigation: NavigationStackProp;
}

/* component */
class Updates extends React.Component<UpdatesProps> {

	constructor(props: UpdatesProps){
		super(props);
		this.state = {
			savedManga: [],
		};
	}

	public render(){
		return (
			<View style={styles.container}>
				{ /*************** Main Component ***************/ }
				<StyledHeader text="Updates" showBackButton={false}/>
				<View style={styles.body}>
					<Text>Updates Tab!</Text>
				</View>
			</View>
		);
	}
}

/* styles */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default Updates;
