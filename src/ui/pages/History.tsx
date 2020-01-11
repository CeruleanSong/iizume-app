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
				{/* <StyledHeader text="Library" showBackButton={false}>
					<View style={{width: "50%"}}>
					</View>
				</StyledHeader> */}
				<Text>History Tab!</Text>
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

export default History;
