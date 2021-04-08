import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from '@/AppNavigator';

const App = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				 <AppNavigator />
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default App;