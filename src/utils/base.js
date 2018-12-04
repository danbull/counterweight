import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDobH_MgAdOBHMouzjakiLnyhq3xwWbhJ8",
  authDomain: "counterweight-prototype.firebaseapp.com",
  databaseURL: "https://counterweight-prototype.firebaseio.com",
  projectId: "counterweight-prototype",
  storageBucket: "counterweight-prototype.appspot.com",
  messagingSenderId: "321468679011"
});

const base = Rebase.createClass(firebaseApp.database());
const auth = firebase.auth();

export { firebaseApp, auth };

export default base;