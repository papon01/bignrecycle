// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDEXKsKG1mjccq56dkXYGJwS5EwgosANQ",
  authDomain: "bignrecycle.firebaseapp.com",
  databaseURL: "https://bignrecycle-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bignrecycle",
  storageBucket: "bignrecycle.appspot.com",
  messagingSenderId: "837943993291",
  appId: "1:837943993291:web:601519d6265df95c000c4e",
  measurementId: "G-TPKYP54M7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);  

login.addEventListener('click',(e) => {
  

  const auth = getAuth();
getRedirectResult(auth)
.then((result) => {
// This gives you a Google Access Token. You can use it to access Google APIs.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;

// The signed-in user info.
const user = result.user;
}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.customData.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...
});
})