/**
 * StyledHeader.ts
 * - Generates a header with a specified style
 * Notes:
 * - N/A
 * Created 19-12-30
 * @author Filip Ekström <filip.ekstrom98@gmail.com>
 */

import React from "react";
import { StyleSheet, Text, TextStyle, TouchableNativeFeedback, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { withNavigation } from "react-navigation";
import { NavigationStackProp } from "react-navigation-stack";

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
		<View style={(props.showBackButton ?? true) ? [style.header] : [style.header, style.headerCenter]}>
			{(props.showBackButton ?? true) && // Default to showing back button if not passed into props
				<View style={{width: 40, height: 40}}>
					<TouchableNativeFeedback
						onPress={() => backButtonPressed()}
						background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.25)')}>
						<View style={style.backButton}>
							<Icon name="arrow-back" color="#ffffff" style={{fontSize: 22}}></Icon>
						</View>
					</TouchableNativeFeedback>
				</View>
			}

			<Text style={style.headerText}>{props.text}</Text>

			{(props.showBackButton ?? true) && // Dumb empty view to make sure stuff is aligned properly
				<View></View>
			}
		</View>
	);
};

const style = StyleSheet.create({
	header: {
		width: "100%",

		backgroundColor: "#e05c74",

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 8,
	},
	headerBetween: {
		justifyContent: "space-between",
	},
	headerCenter: {
		justifyContent: "center",
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

		marginRight: "auto",
		marginLeft: 10,
	},
});

export default withNavigation(StyledHeader);
