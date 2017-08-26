import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'power-heart-beat.firebaseapp.com',
  databaseURL: 'https://power-heart-beat.firebaseio.com',
  projectId: 'power-heart-beat',
  storageBucket: 'power-heart-beat.appspot.com',
};
firebase.initializeApp(config);

export default firebase;
