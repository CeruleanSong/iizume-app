 /**
  * MangaView.ts
  * - Handles manga recently read by the user
  * Notes:
  * - N/A
  * Created 19-12-31
  * @author Elias Mawa <elias@emawa.io>
  */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationStackProp } from 'react-navigation-stack';
import { Manga } from '../../../lib/manga/Manga';
import StyledFlatListItem from '../../components/StyledFlatListItem';
import StyledHeader from '../../components/StyledHeader';

 interface MangaViewProps {
	 navigation: NavigationStackProp;
 }

const MangaView: React.FC<MangaViewProps> = (props: MangaViewProps) => {
	const manga: Manga = props.navigation.getParam('manga');
	console.log(manga);

	return (
		<View>
			{ /*************** Main Component ***************/ }
			<StyledHeader text={manga.title} showBackButton={false}/>
			<Image
				style={styles.image}
				source={{uri: manga.img}} />
			<Text> Author: { manga.artist }</Text>
			<Text> Artist: { manga.author }</Text>
			<Text> tags: { manga.tags }</Text>
			<Text style={styles.bt}> { manga.description }</Text>
			<FlatList
				data={manga.chapters}
				numColumns={1}
				removeClippedSubviews={true}
				contentContainerStyle={styles.container}
				renderItem={({ item, index }: any) => <StyledFlatListItem key={index} title={item.title} onSelect={() => null} /> }
				keyExtractor={(item, index) => index.toString() }
			/>
		</View>
	);
};

 const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	bt: {
		marginTop: 1,
		borderTopColor: "black",
		borderTopWidth: 1,
	},
	image: {
		width: "100%",
		height: 100,
		top: 0,
		resizeMode: "center",
	},
	list: {
		position: 'absolute',
		top: '90%',

		height: '5%',
		width: '100%',
	},
});

 export default MangaView;
