import firebase from 'firebase/app';
import 'firebase/auth';
let firebaseConfig = {
    apiKey: "AIzaSyBP_9iCINKoj4Nt8BMod9Fp2YKLzYqSwG8",
    authDomain: "chamado-596d9.firebaseapp.com",
    projectId: "chamado-596d9",
    storageBucket: "chamado-596d9.appspot.com",
    messagingSenderId: "843422579204",
    appId: "1:843422579204:web:b0e3979aa3afe9c6cf1351",
    measurementId: "G-TVBZ700T8N"
  };
  if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
  }

  export default firebase;