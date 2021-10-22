import {initializeApp} from 'firebase/app'
// import 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// import {getStorage} from 'firebase/storage'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR_q2T3bcb4vZo4T-JWKc0mbYqF48_jC8",
  authDomain: "learning-dff4d.firebaseapp.com",
  projectId: "learning-dff4d",
  storageBucket: "learning-dff4d.appspot.com",
  messagingSenderId: "918209906968",
  appId: "1:918209906968:web:4be452851c278196fab66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

export {app, db};