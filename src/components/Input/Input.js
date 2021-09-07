import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from 'react-native';

import axios from 'axios';

const Input = () => {
	const [ ingredientInput, setIngredientInput ] = React.useState('');

	const ingredientInputHandler = async (e) => {
		e.preventDefault();
		const API_URL = 'http://localhost:3000/api/search';
		const body = {
			query: ingredientInput
		};
		const res = await axios.post(`${API_URL}`, body);
		console.log('BACKEND API DATA: ', res);
	};

	return (
		<SafeAreaView>
			<Text>Input your ingredients:</Text>
			<TextInput style={styles.input} onChangeText={setIngredientInput} value={ingredientInput} />
			<Button style={styles.button} onPress={ingredientInputHandler} title="Submit" color="blue" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10
	},
	button: {
		width: '33%'
	}
});

export default Input;
