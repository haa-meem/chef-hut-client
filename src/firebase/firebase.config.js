// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoOLQiyoZTABP_tKfNunQ4LMNCXfbVakk",
  authDomain: "chef-recipe-hunter-78e93.firebaseapp.com",
  projectId: "chef-recipe-hunter-78e93",
  storageBucket: "chef-recipe-hunter-78e93.appspot.com",
  messagingSenderId: "223333994191",
  appId: "1:223333994191:web:24e56986a501d3fe02b1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;