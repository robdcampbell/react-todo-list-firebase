import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2y95rAZkXuKTf8eDOpoGSsKRWKUUIMus",
  authDomain: "todo-app-react-735e7.firebaseapp.com",
  projectId: "todo-app-react-735e7",
  storageBucket: "todo-app-react-735e7.appspot.com",
  messagingSenderId: "50192751003",
  appId: "1:50192751003:web:f31a09385fe7694083a93e",
  measurementId: "G-0HHG31965M",
});

const db = firebaseApp.firestore();
export default db;
