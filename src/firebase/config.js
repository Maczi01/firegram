import * as firebase from "firebase";
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDMfheufuE-xNsbajL44BP8o1PhUfunzig",
    authDomain: "firegram-cad.firebaseapp.com",
    databaseURL: "https://firegram-cad.firebaseio.com",
    projectId: "firegram-cad",
    storageBucket: "firegram-cad.appspot.com",
    messagingSenderId: "146025023828",
    appId: "1:146025023828:web:63c02b9d7685bf963120c1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectStorage,
    projectFirestore,
    timestamp
}