import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAwQ1k-2H5qI4vvrHbXh6CEC3oWbZV02SA",
  authDomain: "club-ecommerce-2e809.firebaseapp.com",
  projectId: "club-ecommerce-2e809",
  storageBucket: "club-ecommerce-2e809.appspot.com",
  messagingSenderId: "709369726879",
  appId: "1:709369726879:web:ec469697d52df17bf9dfaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)