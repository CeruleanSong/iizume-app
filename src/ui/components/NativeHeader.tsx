/**
 * StyledHeader.ts
 * - Generates a header with a specified style
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Appbar, useTheme } from 'react-native-paper';

interface HeaderProps {
	navigation: MaterialBottomTabScreenProps<any>;
	showBack?: boolean;
	backFunc?: () => void;
	title: string;
	subtitle?: string;
	theme?: any;
}

const styles = StyleSheet.create({
	header: {
		elevation: 8
	}
});

const NativeHeader = (_props: HeaderProps) => {
	const theme = {
		...useTheme(),
		colors: {
			primary: '#0c0c0c'
		},
		..._props.theme
	};
	
	const _backFunc = () => {
		if(_props.backFunc) {
			_props.backFunc();
		} else {
			_props.navigation.navigation.goBack();
		}
	};
	
	return (
		<Appbar.Header theme={theme} style={styles.header}>
			<StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
			{
				(() => {
					if(_props.showBack) {
						return (<Appbar.BackAction onPress={_backFunc} />);
					}
				})()
			}
			<Appbar.Content
				title={_props.title}
				subtitle={_props.subtitle} />
		</Appbar.Header>
	);
};

export default withNavigation(NativeHeader);
