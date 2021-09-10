import React from 'react';

import styled from 'styled-components';
import AddRecipeForm from '../components/Forms/AddRecipeForm';

const Container = styled.SafeAreaView`
	flex: 1;
	padding: 50px 0;
	margin: 0 10px;
	background-color: #f4f4f4;
`;

const AddRecipe = () => {
	return (
		<Container>
			<AddRecipeForm />
		</Container>
	);
};

export default AddRecipe;
