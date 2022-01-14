import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"



const config = {
    apiKey: "AIzaSyAUq2zgSUAGAq5ncv0TC4u5oK-qBj7hsAU",
    authDomain: "screening-app-8b7f1.firebaseapp.com",
    databaseURL: "https://screening-app-8b7f1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "screening-app-8b7f1",
    storageBucket: "screening-app-8b7f1.appspot.com",
    messagingSenderId: "857138208181",
    appId: "1:857138208181:web:394d9fbdbeecc1435c8dfc",
    measurementId: "G-BPLM861MP5"
  };

  const app = initializeApp(config);
  const db = getFirestore(app);
  
  export  { db }