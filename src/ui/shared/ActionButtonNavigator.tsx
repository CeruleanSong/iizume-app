/**
 * ActionButtonNavigator.ts
 * - An action button to navigate through application
 * Notes:
 * Created 19-12-31
 * @author Elias Mawa <elias@emawa.io>
 */

import React from 'react';
import { StyleSheet } from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationStackProp } from 'react-navigation-stack';
import { AppRoutes } from "../AppConfig";

interface ActionButtonNavigatorProps {
	navigation: NavigationStackProp;
}

// tslint:disable-next-line: no-empty-interface
interface ActionButtonNavigatorState { }

/**
 * Component for saved manga
 */
class ActionButtonNavigator extends React.Component<ActionButtonNavigatorProps> {

	constructor(props: ActionButtonNavigatorProps){
		super(props);
		this.state = {};
	}

	public render(){
		return (
			<ActionButton buttonColor="#ffb7c5" size={largeButtonRadius}
				renderIcon={(active) => (active) ?
					(<Icon name="expand-less" style={styles.actionButtonIcon}/>) :
					(<Icon name="expand-less" style={styles.actionButtonIcon}/>)}
				degrees={rotation}>

				<ActionButton.Item buttonColor='#e05c74' title="Library" size={smallButtonRadius}
					onPress={() => this.props.navigation.navigate(AppRoutes.Library.name)}>
					<Icon name="book" style={styles.actionButtonIcon} />
				</ActionButton.Item>

				<ActionButton.Item buttonColor='#e05c74' title="Updates" size={smallButtonRadius}
					onPress={() => this.props.navigation.navigate(AppRoutes.Updates.name)}>
					<Icon name="new-releases" style={styles.actionButtonIcon} />
				</ActionButton.Item>

				<ActionButton.Item buttonColor='#e05c74' title="History" size={smallButtonRadius}
					onPress={() => this.props.navigation.navigate(AppRoutes.History.name)}>
					<Icon name="history" style={styles.actionButtonIcon} />
				</ActionButton.Item>

				<ActionButton.Item buttonColor='#e05c74' title='Browse' size={smallButtonRadius}
					onPress={() => this.props.navigation.navigate(`${AppRoutes.Browse.name}`)}>
					<Icon name="search" style={styles.actionButtonIcon} />
				</ActionButton.Item>

				<ActionButton.Item buttonColor='#e05c74' title="Settings" size={smallButtonRadius}
					onPress={() => this.props.navigation.navigate(AppRoutes.Settings.name)}>
					<Icon name="settings" style={styles.actionButtonIcon} />
				</ActionButton.Item>
			</ActionButton>
		);
	}
}

/*************** Styles ***************/

const largeButtonRadius = 48;
const smallButtonRadius = 36;
const rotation = 180;

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
});

export default ActionButtonNavigator;