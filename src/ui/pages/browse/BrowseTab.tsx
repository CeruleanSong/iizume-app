import { GestureResponderEvent } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native-paper';
import fetch from 'node-fetch';

import Container from '../../components/Container';
import NativeContainer from '../../components/NativeContainer';
import NativeFlatList from '../../components/NativeFlatList';
import NativeHeader from '../../components/NativeHeader';

interface BrowseTabProps {
	navigation: StackNavigationProp<any>;
}

const BrowseTab = (props: BrowseTabProps) => {
	const [ sourceList, useSourceList ] = React.useState<string[]>([]);
	const [ sourceConfig, useSourceConfig ] = React.useState<string[]>([]);
	
	React.useEffect(() => {
		fetch('http://10.0.0.161:3070/api/source').then(async (result) => {
			if(result.status === 200) {
				const sources = JSON.parse(await result.text()).sources;
				const source_list = [];
				const source_config = [];
				for(const i in sources) {
					source_list.push(sources[i].display_title);
					source_config[sources[i].display_title] = sources[i];
				}
				useSourceList(source_list);
				useSourceConfig(source_config);
			}
		});
	}, []);

	const pushBrowser = (_event: GestureResponderEvent, item: any) => {
		props.navigation.push('BrowseSource', { source: sourceConfig[item.title] });
	};

	return (
		<NativeContainer maxHeight>
			<NativeHeader
				navigation={props.navigation}
				title='Browse' />
			{
				sourceList.length > 0 ?
					<Container>
						<NativeFlatList pressFunc={pushBrowser} items={sourceList} />
					</Container> :
					<Text>
						Cannot connect to server!
					</Text>
			}
		</NativeContainer>
	);
};

export default BrowseTab;
