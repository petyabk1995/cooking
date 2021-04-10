import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDB16YXkkQ2N1sAgT8El2yPPXpOY9vI-cY",
    authDomain: "cooking-the-world.firebaseapp.com",
    projectId: "cooking-the-world",
    storageBucket: "cooking-the-world.appspot.com",
    messagingSenderId: "249155320177",
    appId: "1:249155320177:web:bc6655006eca67a4f4ded0"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  export const auth = firebase.auth();

