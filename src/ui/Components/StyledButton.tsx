/**
 * StyledButton.ts
 * - Generates a buttons with a specified  style
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";

interface StyledButtonProps {
	text: string;
	onPress: () => any;
	style?: TextStyle;
	textStyle?: TextStyle;
}

const StyledButton = (props: StyledButtonProps) => {
	return (
		<TouchableOpacity style={{
			...style.button,
			...props.style,
		}} onPress={props.onPress} activeOpacity={0.8}>
			<Text style={{
				...style.buttonText,
				...props.textStyle,
			}}>{props.text}</Text>
		</TouchableOpacity>
	)
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

		fontSize: 16,
	},
});

export default StyledButton;