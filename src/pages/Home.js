import React from 'react';
import { useSelector } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RecipeList from '../components/RecipeList/RecipeList';
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

const WelcomeText = styled.Text`
	margin-top: 50px;
	font-size: 40px;
	color: #212121;
`;

const RecipeText = styled.Text`
	font-size: 20px;
	color: #212121;
`;

const Home = ({ navigation }) => {
	const recipes = useSelector((state) => state.auth.recipes);
	const user = useSelector((state) => state.auth.user);

	const addRecipeHandler = () => {
		navigation.navigate('AddRecipe');
	};

	return (
		<Container>
			<WelcomeText> Welcome, {user.fullName}!</WelcomeText>
			<RecipeContainer>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<RecipeText>Here's your list of recipes: </RecipeText>
					<TouchableOpacity onPress={addRecipeHandler}>
						<AntDesign name = "pluscircle" size={20} color="#212121" />
					</TouchableOpacity>
				</View>
				<RecipeList recipes={recipes} />
			</RecipeContainer>
		</Container>
	);
};

export default Home;
