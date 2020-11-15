import firebase from "firebase";
import firebaseConfig from './secrets/firebaseConfig.js'
// Required for side-effects
require("firebase/firestore");

const config = {
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    projectId: "megahack-5ed-moving"
}
const firebaseApp = firebase.initializeApp(config);
var db = firebaseApp.firestore();

console.log("db created")

export default db