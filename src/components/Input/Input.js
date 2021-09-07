import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from 'react-native';

import axios from 'axios';

const Input = () => {
	const [ ingredientInput, setIngredientInput ] = React.useState('');

	const ingredientInputHandler = async (e) => {
		e.preventDefault();
		const API_URL = 'https://api.nal.usda.gov/fdc/v1/foods';
		const res = await axios.get(`${API_URL}/search?api_key=DEMO_KEY&query=${JSON.stringify(ingredientInput)}`);
		console.log(res.data);
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
