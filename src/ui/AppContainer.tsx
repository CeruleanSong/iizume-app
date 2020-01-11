/**
 * AppContainer.ts
 * - Root component & root ui actions
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { createAppContainer } from 'react-navigation';

import { AppNavigator } from "./AppConfig";

/**
 * Wrap the navigator
 */
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
