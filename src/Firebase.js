// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjGLb_fAKazk5axWQdbt2d6D2hMP1Wh0U",
  authDomain: "airbnbauth-f1b42.firebaseapp.com",
  projectId: "airbnbauth-f1b42",
  storageBucket: "airbnbauth-f1b42.appspot.com",
  messagingSenderId: "296873654118",
  appId: "1:296873654118:web:a5d7947677651d7f7f7aa7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      //   console.log(result);
      const { displayName, email, photoURL } = result.user;

      localStorage.setItem("name", displayName);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", photoURL);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Function to handle sign-out
export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Clear local storage
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("profilePic");
    })
    .catch((error) => {
      console.log(error);
    });
};
