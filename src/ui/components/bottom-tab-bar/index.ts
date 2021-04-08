import BottomTabBar from './BottomTabBar';
import BottomTabBarItem from './BottomTabBarItem';
import BottomTabNavigator from './BottomTabNavigator';

export interface BottomTabScreen {
	name: string;
	component: React.FunctionComponent<any>;
	icon?: string;
	backgroundColor?: string;
};

export {
	BottomTabBar,
	BottomTabBarItem,
	BottomTabNavigator
};