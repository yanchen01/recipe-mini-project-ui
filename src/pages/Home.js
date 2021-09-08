import React from 'react';

import { View, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import styled from 'styled-components';

const Container = styled.SafeAreaView`
	flex: 1;
	padding: 50px 0;
	margin: 0 10px;
	background-color: #f4f4f4;
`;

const RecipeContainer = styled.View`
	flex: 0.8;
	padding: 10px 10px;
	margin: 50px 0;
	background-color: #fafafa;
	border-radius: 20px;
	max-height: 350px;
`;

const HorizontalScrollContainer = styled.ScrollView`
	flex: 1;
	margin-top: 10px;
`;

const WelcomeText = styled.Text`
	margin-top: 50px;
	font-size: 40px;
	color: #212121;
`;

const RecipeText = styled.Text`
	font-size: 20px;
	color: #212121;
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

const recipes = [
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
	},
	{
		id: 3,
		name: 'Salad',
		imageUri:
			'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		calories: 350
	},
	{
		id: 4,
		name: 'Salad',
		imageUri:
			'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		calories: 350
	}
];

const Home = () => {
	const addRecipeHandler = () => {
		console.log('Adding recipe...');
	};

	return (
		<Container>
			<WelcomeText>Welcome, user!</WelcomeText>
			<RecipeContainer>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<RecipeText>Here's your list of recipes: </RecipeText>
					<TouchableOpacity onPress={addRecipeHandler}>
						<AntDesign name="pluscircle" size={20} color="#212121" />
					</TouchableOpacity>
				</View>
				<HorizontalScrollContainer horizontal>
					{recipes.map((recipe) => (
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
					))}
				</HorizontalScrollContainer>
			</RecipeContainer>
		</Container>
	);
};

export default Home;
