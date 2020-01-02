/**
 * AppContainer.ts
 * - Root component & root ui actions
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { createAppContainer } from 'react-navigation';

import { AppNav } from "./AppConfig";

/**
 * Wrap the navigator
 */
const AppContainer = createAppContainer(AppNav);

export default AppContainer;