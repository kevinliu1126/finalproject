import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBdH6lvy1G17lk0MNsgibJZ3M4hTrtiMY",
    authDomain: "final-73099.firebaseapp.com",
    projectId: "final-73099",
    storageBucket: "final-73099.appspot.com",
    messagingSenderId: "1035242910845",
    appId: "1:1035242910845:web:c2bac46ec6a1b165856d14"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default fire;
export {db};