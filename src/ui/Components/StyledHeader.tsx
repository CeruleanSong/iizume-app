/**
 * StyledHeader.ts
 * - Generates a header with a specified style
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

interface HeaderProps {
	style?: ViewStyle;
	textStyle?: TextStyle;
	children?: Element; // TODO: Fix type. Can't remember what type this is LOL
	text: string;
}

const StyledHeader = (props: HeaderProps) => {
	return (
		<View style={style.header}>
			{props.children}
			<Text style={style.headerText}>{props.text}</Text>
		</View>
	);
};

const style = StyleSheet.create({
	header: {
		minHeight: "5%",
		width: "100%",

		backgroundColor: "#e05c74",

		justifyContent: "center",
		alignItems: "center",
		padding: 8,
	},
	headerText: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,

		color: "#ffffff",
		margin: 8,
	},
});

export default StyledHeader;