import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'saveLoginInfo',
	initialState: {
		value: {
			accessToken: null,
			refreshToken: null,
			id: null,
			username: null,
		},
	},
	reducers: {
		saveLoginInfo: (state, action) => {
			state.value = { ...action.payload };
		},
	},
});

// Action creators are generated for each case reducer function
export const { saveLoginInfo } = counterSlice.actions;

export default counterSlice.reducer;
