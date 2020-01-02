/**
 * Updates.ts
 * - Handles application settings.
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { View } from 'react-native';

import { NavigationStackProp } from 'react-navigation-stack';
import StyledHeader from '../components/StyledHeader';
import ActionButtonNavigator from '../shared/ActionButtonNavigator';

interface UpdatesProps {
	navigation: NavigationStackProp;
}

const Updates: React.FC<UpdatesProps> = (props: UpdatesProps) => {
	return (
		<View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
			{ /*************** Main Component ***************/ }
			<StyledHeader text="Updates">
				<View style={{width: "50%"}}>
				</View>
			</StyledHeader>
		</View>
	);
};

export default Updates;