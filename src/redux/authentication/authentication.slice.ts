// Libraries
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
import { IAuthenticationState } from './types';

const initialState: IAuthenticationState = {
	user: null,
	isAuthenticated: false,
};

export const authenticationSlice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		setAuthenticated: (state, action: PayloadAction<IAuthenticationState>) => {
			state.isAuthenticated = action.payload.isAuthenticated;
			state.user = action.payload.user;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setAuthenticated } = authenticationSlice.actions;

export default authenticationSlice.reducer;
