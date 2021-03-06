import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Home from './src/pages/Home';
import AddRecipe from './src/pages/AddRecipe';
import BarcodeScanner from './src/pages/BarcodeScanner';
import Signup from './src/pages/Signup';
import Login from './src/pages/Login';

import { Provider } from 'react-redux';

import store from './src/store/index';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<View style={styles.container}>
					<StatusBar style="auto" />
					<Stack.Navigator initialRouteName="Signup">
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="AddRecipe" component={AddRecipe} />
						<Stack.Screen name="ScanBarcode" component={BarcodeScanner} />
						<Stack.Screen name="Signup" component={Signup} />
						<Stack.Screen name="Login" component={Login} />
					</Stack.Navigator>
				</View>
			</NavigationContainer>
		</Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f4f4'
		// alignItems: 'center',
		// justifyContent: 'center'
	}
});

export default App;
