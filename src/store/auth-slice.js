import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
	isAuthenticated: false,
	recipes: [
		{
			id: 1,
			name: 'Salad',
			imageUri:
				'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
			calories: 350
		},
		{
			id: 2,
			name: 'Burger',
			imageUri:
				'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=602&q=80',
			calories: 1200
		}
	]
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
		addRecipe(state, action) {
			state.recipes.push(action.payload);
		}
	}
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
