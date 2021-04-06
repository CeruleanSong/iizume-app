import React from 'react';
import { StyleSheet, View } from 'react-native';
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
		<View
			style={{
				...styles.container,
				minHeight: _props.maxHeight ? '100%' : 'auto',
				backgroundColor: _props.backgroundColor ? _props.backgroundColor : styles.container.backgroundColor,
				padding: _props.padding,
				margin: _props.margin
			}}>
			{ _props.children }
		</View>
	 );
};
 
export default NativeContainer;
 