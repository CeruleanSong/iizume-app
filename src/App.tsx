/**
 * App.tsx
 * Entry point of the application that react-native framework interacts with.
 * Exports the root container that react-native interacts with.
 * 
 * Notes: 
 * - N/A
 * 
 * Created by Elias Mawa on 19-04-11
 * Last edit by Elias Mawa on 19-04-11
 */

import { AppContainer } from './ui/AppContainer';

const app = new AppContainer();

export default app.create(); // tslint:disable-line
