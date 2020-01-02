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
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { withNavigation } from "react-navigation";
import { NavigationStackProp } from "react-navigation-stack";

/**
 * 
 */
interface HeaderProps {
	style?: ViewStyle;
	textStyle?: TextStyle;
	children?: Element; // TODO: Fix type. Can't remember what type this is LOL
	showBackButton?: boolean;
	onBackButtonPressed?: () => void;
	text: string;

	navigation: NavigationStackProp;
}

const StyledHeader = (props: HeaderProps) => {
	const backButtonPressed = () => {
		if (props.onBackButtonPressed){
			props.onBackButtonPressed();
		}
		else{
			props.navigation.goBack(); // Default to navigation back if no onBackButton callback is specified.
		}
	};

	return (
		<View style={style.header}>
			{(props.showBackButton ?? true) && // Default to showing back button if not passed into props
				<TouchableOpacity activeOpacity={0.8} style={style.backButton} onPress={() => backButtonPressed()}>
					<Icon name="arrow-back" color="#ffffff" style={{fontSize: 22}}></Icon>
				</TouchableOpacity>
			}
			<Text style={style.headerText}>{props.text}</Text>
		</View>
	);
};

const style = StyleSheet.create({
	header: {
		width: "100%",

		backgroundColor: "#e05c74",

		flexDirection: "row",
		justifyContent: "flex-start",
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
	backButton: {
		borderRadius: 1000,
		overflow: "hidden",

		height: 40,
		width: 40,

		justifyContent: "center",
		alignItems: "center",

		marginRight: 20,
		marginLeft: 10,
	},
});

export default withNavigation(StyledHeader);