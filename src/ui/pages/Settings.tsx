 /**
  * Settings.ts
  * - Handles application settings.
  * Notes:
  * - N/A
  * Created 19-04-11
  * @author Elias Mawa <elias@emawa.io>
  */

import React from 'react';
import { Text, View } from 'react-native';

import { NavigationStackProp } from 'react-navigation-stack';

interface SettingsProps {
	navigation: NavigationStackProp;
}

/**
 * Component for settings interactions
 */
const Settings: React.FC<SettingsProps> = (props: SettingsProps) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings Tab!</Text>
		</View>
	);
};

export default Settings;