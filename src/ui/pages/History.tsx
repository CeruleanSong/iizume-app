 /**
  * HistoryProps.ts
  * - Handles manga recently read by the user
  * Notes:
  * - N/A
  * Created 19-12-31
  * @author Elias Mawa <elias@emawa.io>
  */

import React from 'react';
import { Text, View } from 'react-native';

import { NavigationStackProp } from 'react-navigation-stack';
import StyledHeader from '../components/StyledHeader';

interface HistoryProps {
	navigation: NavigationStackProp;
}

const History: React.FC<HistoryProps> = (props: HistoryProps) => {
	return (
		<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
			{ /*************** Main Component ***************/ }
			<StyledHeader text="History">
				<View style={{width: "50%"}}>
				</View>
			</StyledHeader>
		</View>
	);
};

export default History;