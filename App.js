import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f4f4',
		// alignItems: 'center',
		// justifyContent: 'center'
	}
});
