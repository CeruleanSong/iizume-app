import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { ImageBackground, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

interface Props {
	title?: string;
	cover: string;
	onSelect: () => void;
}

const ShelfItem = (props: Props) => {
	const styles = StyleSheet.create({
		item: {
			marginTop: '2%',
			// marginLeft: "auto",
			// marginRight: "auto",
			paddingHorizontal: '1%',
	
			borderRadius: 5,
			overflow: 'hidden',
	
			// maxHeight: '15%',

			// width: "48%",
			width: `${100/3}%`,
			aspectRatio: .7
		},
		itemTitle: {
			position: 'absolute',
			bottom: 0,
			width: '100%',
			minHeight: '15%',
			maxHeight: '15%',
	
			justifyContent: 'center',
			alignItems: 'flex-start',
	
			borderBottomStartRadius: 5,
			borderBottomEndRadius: 5
	
			// overflow: 'ellipsis',
		},
		itemText: {
			position: 'absolute',
			bottom: 0,

			fontSize: 14,
			padding: 2,
			color: '#ffffff',
			fontWeight: 'bold',
			textAlign: 'left',
			width: '100%'
		},
		imageWrapper: {
			width: '100%',
			height: '100%',
	
			borderTopStartRadius: 5,
			borderTopEndRadius: 5,
	
			overflow: 'hidden'
		},
		linearGradient: {
			flex: 1
		},
		image: {
			width: '100%',
			height: '100%',
			resizeMode: 'cover'
		}
	});

	return (
		<View style={styles.item}>
			<TouchableNativeFeedback
				onPress={() => props.onSelect()}
				useForeground={true}
				background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.25)', false)}>
				<View>
					<View style={styles.imageWrapper}>
						<ImageBackground
							source={{ uri: props.cover }}
							style={styles.image} >
							<LinearGradient
								start={{ x: 0, y: 0.8 }}
								end={{ x: 0, y: 1.0 }}
								style={styles.linearGradient}
								colors={[ '#0000', '#000f' ]} >
							</LinearGradient>
						</ImageBackground>
						<Text numberOfLines={1} style={styles.itemText}> {props.title} </Text>
					</View>
					{/* <View style={styles.itemTitle}>
					</View> */}
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

export default ShelfItem;
