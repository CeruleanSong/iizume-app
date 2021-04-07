import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Appbar, useTheme } from 'react-native-paper';

interface HeaderProps {
	navigation: StackNavigationProp<any>;
	showBack?: boolean;
	flat?: boolean;
	backFunc?: () => void;
	title: string;
	subtitle?: string;
	theme?: any;
}

const NativeHeader = (props: HeaderProps) => {
	const styles = StyleSheet.create({
		header: {
			elevation: props.flat ? 0 : 8
		}
	});

	const theme = {
		...useTheme(),
		colors: {
			primary: '#0c0c0c'
		},
		...props.theme
	};
	
	const _backFunc = () => {
		if(props.backFunc) {
			props.backFunc();
		} else {
			props.navigation.goBack();
		}
	};
	
	return (
		<Appbar.Header theme={theme} style={styles.header}>
			<StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
			{
				(() => {
					if(props.showBack) {
						return (<Appbar.BackAction onPress={_backFunc} />);
					}
				})()
			}
			<Appbar.Content
				title={props.title}
				subtitle={props.subtitle} />
		</Appbar.Header>
	);
};

export default withNavigation(NativeHeader);
