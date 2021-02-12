import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  // SDK FROM FIREBASE
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// to interact with storage (imgs, files, etc...)
const projectStorage = firebase.storage();
//to interact with firestore DB
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
