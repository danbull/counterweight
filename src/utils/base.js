import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTqO0lEF1-Qsgh5hYbzGMMkJd-VyxSvow",
  authDomain: "counterweight-7e93f.firebaseapp.com",
  databaseURL: "https://counterweight-7e93f.firebaseio.com",
  projectId: "counterweight-7e93f",
  storageBucket: "",
  messagingSenderId: "464792506009"
});

const base = Rebase.createClass(firebaseApp.database());
const auth = firebase.auth();

export { firebaseApp, auth };

export default base;