import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';// import { firestore } from "firebase/firestore";
// import { auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY4gtVH5-HUgRJ_QLowYIVfwWaqsloDw8",
  authDomain: "signinform-30f0f.firebaseapp.com",
  projectId: "signinform-30f0f",
  storageBucket: "signinform-30f0f.appspot.com",
  messagingSenderId: "688739178181",
  appId: "1:688739178181:web:63b168c76b3d28dbff82ac",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth , provider };
export default db;
