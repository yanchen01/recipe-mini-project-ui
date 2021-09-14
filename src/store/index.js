import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import recipeReducer from './recipe-slice';

const store = configureStore({
	reducer: { auth: authReducer, recipe: recipeReducer }
});

export default store;
