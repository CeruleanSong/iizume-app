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
import StyledHeader from '../components/StyledHeader';

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
				<StyledHeader text="Settings" showBackButton={false}>
					<View style={{width: "100%"}}>
					</View>
				</StyledHeader>
				<View style={styles.body}>
					<Text>Settings Tab!</Text>
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
		backgroundColor: '#f9f9f9',
		alignItems: 'center',
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Settings;
