import { initializeApp } from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDv40WOTWj56jVpxJk04PbfV6m38_GmAFo',
	authDomain: 'recipe-mini-proj.firebaseapp.com',
	databaseURL: 'https://recipe-mini-proj.firebaseio.com',
	projectId: 'recipe-mini-proj',
	storageBucket: 'recipe-mini-proj.appspot.com',
	messagingSenderId: '270725675428',
	appId: '1:270725675428:ios:7a7d181735a933a4a2a931'
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
