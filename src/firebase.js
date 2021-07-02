import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB0A1dqO9rK4CPZtMi4gKi5hqIX-Kl4eI8",
    authDomain: "todo-app-awesome.firebaseapp.com",
    projectId: "todo-app-awesome",
    storageBucket: "todo-app-awesome.appspot.com",
    messagingSenderId: "664755403967",
    appId: "1:664755403967:web:4fc6ddf7d2e04133eb1a0a",
    measurementId: "G-RNJ7D55FJR"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export default db;