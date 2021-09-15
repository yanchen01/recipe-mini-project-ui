import React, { useState } from 'react';

import firebase from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './SignUpStyle';

const Signup = ({ navigation }) => {
	const dispatch = useDispatch();
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	const onFooterLinkPress = () => {
		navigation.navigate('Login');
	};

	const onRegisterPress = () => {
		if (password !== confirmPassword) {
			alert("Passwords don't match.");
			return;
		}

		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const uid = userCredential.user.uid;

				const user = {
					id: uid,
					email,
					fullName
				};
				dispatch(authActions.login(user));

				navigation.navigate('Home');
				setFullName('');
				setEmail('');
				setPassword('');
				setConfirmPassword('');
			})
			.catch((error) => {
				console.log(error.code, error.message);
				return;
			});
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
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder="Confirm Password"
					onChangeText={(text) => setConfirmPassword(text)}
					value={confirmPassword}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.button} onPress={() => onRegisterPress()}>
					<Text style={styles.buttonTitle}>Create account</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Already got an account?{' '}
						<Text onPress={onFooterLinkPress} style={styles.footerLink}>
							Log in
						</Text>
					</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default Signup;
