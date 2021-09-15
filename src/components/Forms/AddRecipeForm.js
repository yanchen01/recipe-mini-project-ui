import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipeActions } from '../../store/recipe-slice';
import { authActions } from '../../store/auth-slice';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, TextInput, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styled from 'styled-components';

const InputContainer = styled.View`
	align-items: flex-start;
	justify-content: flex-start;
	margin: 20px;
`;

const Label = styled.Text`
	color: #212121;
	font-size: 14px;
`;

const P = styled.Text`
	color: #212121;
	font-size: 18px;
`;

const Container = styled.View`
	flex: 1;
	padding: 10px 10px;
	margin: 50px 0;
	background-color: #fafafa;
	border-radius: 20px;
	max-height: 2000px;
	alignItems: center;
`;

const FormTitle = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #212121;
`;

const Button = styled.TouchableOpacity`
	margin: 20px 0;
	padding: 10px 0;
	align-items: center;
	background-color: #c8c8c8;
	border-radius: 5px;
	width: 200px;
`;

const PText = styled.Text`
	font-size: 20px;
	color: #212121;
	font-weight: bold;
`;

const ItemContainer = styled.View`
	flexDirection: row;
	justifyContent: space-between;
	alignItems: center;
	width: 200px;
	margin-top: 10px;
`;

const Item = ({ name, servings }) => (
	<ItemContainer>
		<Text>{name}</Text>
		<Text>x {servings}</Text>
	</ItemContainer>
);

const AddRecipeForm = () => {
	const ingredients = useSelector((state) => state.recipe.ingredients);
	const recipeName = useSelector((state) => state.recipe.name);
	const dispatch = useDispatch();

	const navigation = useNavigation();

	const [ ingredientInput, setIngredientInput ] = useState('');

	const addIngredientHandler = (e) => {
		e.preventDefault();

		dispatch(recipeActions.addIngredient(ingredientInput));

		setIngredientInput('');
	};

	const scanBarcodeHandler = (e) => {
		e.preventDefault();
		navigation.navigate('ScanBarcode');
	};

	const saveRecipeHandler = (e) => {
		e.preventDefault();

		const imageUri =
			'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

		const newRecipe = {
			id: recipeName + ingredients.length.toString(),
			name: recipeName.trim(),
			calories: 100,
			imageUri,
			ingredients
		};

		navigation.goBack();
		dispatch(authActions.addRecipe(newRecipe));
		dispatch(recipeActions.setRecipeName(''));
		dispatch(recipeActions.clearIngredients());
	};

	const renderItem = ({ item }) => <Item name={item.name} servings={item.servings} />;

	return (
		<Container>
			<FormTitle>Add A Recipe</FormTitle>

			<InputContainer>
				<Label>{'Name your recipe: '}</Label>
				<TextInput
					style={styles.input}
					onChangeText={(name) => dispatch(recipeActions.setRecipeName(name))}
					value={recipeName}
				/>
			</InputContainer>

			<InputContainer>
				<Label>{'Type your ingredients below: '}</Label>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<TextInput style={styles.addBtnInput} onChangeText={setIngredientInput} value={ingredientInput} />
					<TouchableOpacity style={styles.addBtn} onPress={addIngredientHandler}>
						<AntDesign name="pluscircle" size={20} color="#212121" />
					</TouchableOpacity>
				</View>
			</InputContainer>

			<PText>OR</PText>

			<Button onPress={scanBarcodeHandler} style={{ width: 300 }}>
				<Text style={{ color: '#212121' }}>Scan Barcode</Text>
			</Button>

			<View style={{ flex: 1, maxHeight: 500 }}>
				<P>
					Ingredients for <P style={{ fontWeight: 'bold' }}>{recipeName}</P>
				</P>
				<FlatList data={ingredients} renderItem={renderItem} keyExtractor={(ingredient) => ingredient.name} />
			</View>

			<Button onPress={saveRecipeHandler}>
				<Text style={{ color: '#212121' }}>Save Recipe</Text>
			</Button>
		</Container>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 50,
		marginTop: 10,
		width: 300,
		borderWidth: 1,
		padding: 10
	},
	addBtnInput: {
		height: 50,
		marginTop: 10,
		width: 235,
		borderWidth: 1,
		padding: 10
	},
	addBtn: {
		margin: 20
	}
});

export default AddRecipeForm;
