import { createSlice } from '@reduxjs/toolkit';

const initialRecipeState = {
	name: '',
	ingredients: []
};

const recipeSlice = createSlice({
	name: 'recipe',
	initialState: initialRecipeState,
	reducers: {
		setRecipeName(state, action) {
			state.name = action.payload;
		},
		addIngredient(state, action) {
			const idx = state.ingredients.findIndex((ingr) => ingr.name === action.payload.trim());

			if (idx !== -1) {
				// if already in ingredients
				state.ingredients[idx].servings++;
			} else {
				// new ingredient
				const ingredient = {
					name: action.payload.trim(),
					servings: 1
				};

				state.ingredients.push(ingredient);
			}
		}
	}
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice.reducer;
