/**
 * HistoryProps.ts
 * - Handles manga recently read by the user
 * Notes:
 * - N/A
 * Created 19-12-31
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import StyledHeader from '../components/StyledHeader';

/* props */
interface HistoryProps {
	navigation: NavigationStackProp;
}

/* component */
class History extends React.Component<HistoryProps> {

	constructor(props: HistoryProps){
		super(props);
		this.state = {
			savedManga: [],
		};
	}

	public render(){
		return (
			<View style={styles.container}>
				{ /*************** Main Component ***************/ }
				<StyledHeader text="History" showBackButton={false}>
					<View style={{width: "50%"}}>
					</View>
				</StyledHeader>
				<View style={styles.body}>
					<Text>History Tab!</Text>
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
export default History;
