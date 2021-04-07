import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { AppNavigator } from './ui/AppNavigator';

const theme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		text: '#f3f3f3',
		background: '#0000',
		surface: '#202020'
	}
};

export const App = () => {
	return (
		<PaperProvider theme={theme}>
			<SafeAreaProvider>
				<NavigationContainer>
					<AppNavigator />
				</NavigationContainer>
			</SafeAreaProvider>
		</PaperProvider>
	);
};