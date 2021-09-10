import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styled from 'styled-components';

const Container = styled.View`
	align-items: flex-start;
	justify-content: flex-start;
	margin: 20px;
`;

const Label = styled.Text`
	color: #212121;
	font-size: 14px;
`;

const Input = ({ label, addBtn }) => {
	const [ input, setInput ] = React.useState('');

	return (
		<Container>
			<Label>{label}</Label>

			{addBtn ? (
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<TextInput style={styles.addBtnInput} onChangeText={setInput} value={input} />
					<TouchableOpacity style={styles.addBtn}>
						<AntDesign name="pluscircle" size={20} color="#212121" />
					</TouchableOpacity>
				</View>
			) : (
				<TextInput style={styles.input} onChangeText={setInput} value={input} />
			)}
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

export default Input;
