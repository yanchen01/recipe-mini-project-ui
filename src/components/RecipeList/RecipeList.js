import React from 'react';

import { TouchableOpacity } from 'react-native';

import styled from 'styled-components';

const HorizontalScrollContainer = styled.ScrollView`
	flex: 1;
	margin-top: 10px;
`;

const RecipeImage = styled.Image`
	width: 200px;
	height: 200px;
	border-radius: 10px;
	margin-right: 10px;
`;

const RecipeName = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #212121;
`;

const RecipeCalories = styled.Text`
	font-size: 16px;
	color: #212121;
`;

const RecipeList = ({ recipes }) => {
	return (
		<HorizontalScrollContainer horizontal>
			{recipes ? (
				recipes.map((recipe) => (
					<TouchableOpacity
						key={recipe.id}
						style={{
							alignItems: 'center',
							justifyContent: 'center'
						}}
						activeOpacity={0.6}
					>
						<RecipeImage
							source={{
								uri: recipe.imageUri
							}}
						/>
						<RecipeName>{recipe.name}</RecipeName>
						<RecipeCalories>Calories: {recipe.calories}</RecipeCalories>
					</TouchableOpacity>
				))
			) : null}
		</HorizontalScrollContainer>
	);
};

export default RecipeList;
