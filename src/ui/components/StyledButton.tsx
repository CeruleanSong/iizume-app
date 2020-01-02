/**
 * StyledButton.ts
 * - Generates a buttons with a specified  style
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import React from "react";
import { StyleSheet, Text, TextStyle, TouchableNativeFeedback, View } from "react-native";

interface StyledButtonProps {
	text: string;
	onPress: () => any;
	style?: TextStyle;
	textStyle?: TextStyle;
}

const StyledButton = (props: StyledButtonProps) => {
	return (
		<View style={{borderRadius: 10, overflow: "hidden", flex: 1}}>
			<TouchableNativeFeedback
				onPress={props.onPress}
				background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.25)')}>
				<View style={{
					...style.button,
					...props.style}}>
					<Text style={{
						...style.buttonText,
						...props.textStyle,
					}}>{props.text}</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

const style = StyleSheet.create({
	button: {
		backgroundColor: "#e05c74",
		borderRadius: 10,
		borderColor: "#ffffff",
		borderWidth: 1,

		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		width: "100%",

		elevation: 3,
	},
	buttonText: {
		color: "#ffffff",
		fontWeight: "bold",
		textAlign: "center",
		width: "100%",

		fontSize: 16,
	},
});

export default StyledButton;