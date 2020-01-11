/**
 * Settings.ts
 * - Handles application settings.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

/* props */
interface SettingsProps {
	navigation: NavigationStackProp;
}

/* component */
class Settings extends React.Component<SettingsProps> {

	constructor(props: SettingsProps){
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
				<Text>Settings Tab!</Text>
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

export default Settings;
