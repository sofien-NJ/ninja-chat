import firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBFpAj6Frke2ILgYAaTUBIfFJYKrDM2gAg",
  authDomain: "ninja-chat-6b688.firebaseapp.com",
  projectId: "ninja-chat-6b688",
  storageBucket: "ninja-chat-6b688.appspot.com",
  messagingSenderId: "246080241240",
  appId: "1:246080241240:web:497f18b993934da75e142d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
