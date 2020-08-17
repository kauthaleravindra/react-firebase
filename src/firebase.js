import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDFEv0g8VngjmPOhsLVQY2MumKweEt4Nz4",
    authDomain: "slack-clone-b49df.firebaseapp.com",
    databaseURL: "https://slack-clone-b49df.firebaseio.com",
    projectId: "slack-clone-b49df",
    storageBucket: "slack-clone-b49df.appspot.com",
    messagingSenderId: "807365086206",
    appId: "1:807365086206:web:9256d9d4f0207c25e3ceaf",
    measurementId: "G-RRMQ7DZ47J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;