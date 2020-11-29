import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAL6NWpJP5bGa_vl9W7f1Qt8szbk9Wb_s4",
  authDomain: "clone-ebd59.firebaseapp.com",
  databaseURL: "https://clone-ebd59.firebaseio.com",
  projectId: "clone-ebd59",
  storageBucket: "clone-ebd59.appspot.com",
  messagingSenderId: "962040416067",
  appId: "1:962040416067:web:256afad629b07028ca11f6",
  measurementId: "G-NDWQVSFGMJ",
});

const auth=firebase.auth();


export  {auth} ;
