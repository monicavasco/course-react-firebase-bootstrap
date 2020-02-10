import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB4fkjaNEUFRHAIV1WVP5aD_aSkzFYIag4",
  authDomain: "eventos-7db86.firebaseapp.com",
  databaseURL: "https://eventos-7db86.firebaseio.com",
  projectId: "eventos-7db86",
  storageBucket: "eventos-7db86.appspot.com",
  messagingSenderId: "64071604145",
  appId: "1:64071604145:web:93d2f6b5c01e9c76434f90"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
