import firebase from "firebase/app";
import 'firebase/auth';    
import 'firebase/storage';    
import 'firebase/database';   
import 'firebase/firestore';  
import 'firebase/messaging';  
import 'firebase/functions'; 

const firebaseConfig = {
    apiKey: "AIzaSyDvw14JBXcio7Zv41XQJ3H-orTA5GnmbME",
    authDomain: "disneyplus-clone-79788.firebaseapp.com",
    projectId: "disneyplus-clone-79788",
    storageBucket: "disneyplus-clone-79788.appspot.com",
    messagingSenderId: "622582767166",
    appId: "1:622582767166:web:8013475421abfa0f69fb6f",
    measurementId: "G-G7VN4DXSJ9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage}
  export default db;