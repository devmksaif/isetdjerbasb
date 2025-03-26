import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

 
const firebaseConfig = {
  apiKey: "AIzaSyAsUv2gY5vXz2wA_1Y1vdvBmXluiKfKnrI",
  authDomain: "calliverse-3e2a6.firebaseapp.com",
  projectId: "calliverse-3e2a6",
  storageBucket: "calliverse-3e2a6.firebasestorage.app",
  messagingSenderId: "680626398443",
  appId: "1:680626398443:web:e139c7f6108f4166080aae",
  measurementId: "G-D3RNF13R08"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };