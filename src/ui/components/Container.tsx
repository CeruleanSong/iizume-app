import React from 'react';
import { View } from 'react-native';

interface ContainerProps {
	children?: JSX.Element[] | JSX.Element;
	paddingHorizontal?: number;
}

const NativeContainer = (_props: ContainerProps) => {
	 return (
		<View
			style={{
				backgroundColor: 'none',
				paddingHorizontal: _props.paddingHorizontal ? _props.paddingHorizontal : 8
			}}>
			{ _props.children }
		</View>
	 );
};
 
export default NativeContainer;
 