/**
 * This is the entry point of the app where react-native runs from 
 */

import { AppContainer } from './ui/AppContainer';

const app = new AppContainer();

export default app.create(); // tslint:disable-line
