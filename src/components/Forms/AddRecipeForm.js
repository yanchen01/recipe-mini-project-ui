import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

import styled from 'styled-components';
import Input from '../Input/Input';

const Container = styled.View`
	flex: 1;
	padding: 10px 10px;
	margin: 50px 0;
	background-color: #fafafa;
	border-radius: 20px;
	max-height: 500px;
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

const AddRecipeForm = () => {
	const navigation = useNavigation();
	const [ ingredients, setIngredients ] = useState([]);

	const scanBarcodeHandler = (e) => {
		e.preventDefault();
		navigation.navigate('ScanBarcode');
	};

	return (
		<Container>
			<FormTitle>Add A Recipe</FormTitle>
			<Input label={'Name your recipe: '} />
			<Input label={'Type your ingredients below: '} addBtn />

			<PText>OR</PText>

			<Button onPress={scanBarcodeHandler}>
				<Text style={{ color: '#212121' }}>Scan Barcode</Text>
			</Button>

			<Button>
				<Text style={{ color: '#212121' }}>Save Recipe</Text>
			</Button>
		</Container>
	);
};

export default AddRecipeForm;
