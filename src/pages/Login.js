import React, { useState } from 'react';

import firebase from '../firebase/config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './LoginStyle';

const Login = ({ navigation }) => {
	const dispatch = useDispatch();

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ fullName, setFullName ] = useState('');

	const onFooterLinkPress = () => {
		navigation.navigate('Signup');
	};

	const onLoginPress = async (e) => {
		e.preventDefault();

		const auth = getAuth();
		let user = null;
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);

			const uid = userCredential.user.uid;
			user = {
				id: uid,
				email,
				fullName
			};

			dispatch(authActions.login(user));

			navigation.navigate('Home');
			setEmail('');
			setFullName('');
			setPassword('');
		} catch (error) {
			console.log(error.message);
			return;
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView style={{ flex: 1, width: '100%' }} keyboardShouldPersistTaps="always">
				<Image style={styles.logo} />
				<TextInput
					style={styles.input}
					placeholder="Full Name"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => setFullName(text)}
					value={fullName}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholder="E-mail"
					placeholderTextColor="#aaaaaa"
					onChangeText={(text) => setEmail(text)}
					value={email}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder="Password"
					onChangeText={(text) => setPassword(text)}
					value={password}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.button} onPress={onLoginPress}>
					<Text style={styles.buttonTitle}>Log in</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Don't have an account?
						<Text onPress={onFooterLinkPress} style={styles.footerLink}>
							Sign up
						</Text>
					</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default Login;
