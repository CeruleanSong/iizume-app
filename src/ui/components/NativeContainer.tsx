import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
 
interface NativeContainerProps {
	children?: JSX.Element[] | JSX.Element;
	backgroundColor?: string;
	padding?: number;
	margin?: number;
	maxHeight?: boolean;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0c0c0c'
	}
});

const NativeContainer = (_props: NativeContainerProps) => {
	 return (
		<SafeAreaView
			style={{
				...styles.container,
				minHeight: _props.maxHeight ? '100%' : 'auto',
				backgroundColor: _props.backgroundColor ? _props.backgroundColor : styles.container.backgroundColor,
				padding: _props.padding,
				margin: _props.margin
			}}>
			{ _props.children }
		</SafeAreaView>
	 );
};
 
export default NativeContainer;
 