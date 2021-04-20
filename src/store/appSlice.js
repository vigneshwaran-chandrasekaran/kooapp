import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showLogin: false,
};

export const appSlice = createSlice({
	name: 'app', // name of the reducer
	initialState,
	reducers: {
		showLogin: (state) => {
			state.showLogin = true;
		},
		hideLogin: (state) => {
			state.showLogin = false;
		},
	},
});

export const { showLogin, hideLogin } = appSlice.actions;

export default appSlice.reducer;
