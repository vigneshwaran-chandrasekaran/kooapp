import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import { getPreloadedState, saveToLocalStorage } from './localStorage';

const store = configureStore({
	reducer: {
		app: appSlice,
	},
	preloadedState: getPreloadedState(),
});

function onStateChange() {
	/**
	 * On store change periodically update that information in localstorage
	 */
	saveToLocalStorage(store.getState());
}

store.subscribe(onStateChange);

export default store;
