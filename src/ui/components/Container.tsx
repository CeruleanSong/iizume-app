import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
	children?: JSX.Element[] | JSX.Element;
	cover?: boolean;
	padding?: number;
	margin?: number;
	backgroundColor?: string;
}

const Container = (props: Props) => {
	const styles = StyleSheet.create({
		container: {
			backgroundColor: '#f0f0f0',
			flex: 1,
			justifyContent: 'flex-start',
			alignItems: 'center'
		}
	});

	return (
		<View
			style={{
				...styles.container,
				minHeight: props.cover ? '100%' : 'auto',
				backgroundColor: props.backgroundColor ? props.backgroundColor : styles.container.backgroundColor,
				padding: props.padding,
				margin: props.margin
			}}>
			{ props.children }
		</View>
	);
};

export default Container;
