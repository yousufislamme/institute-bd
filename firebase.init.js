import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyDYDMB9ampwwGSOBuaqbH6CPr0TGshQJC8",
   authDomain: "institute-bd.firebaseapp.com",
   projectId: "institute-bd",
   storageBucket: "institute-bd.appspot.com",
   messagingSenderId: "670644838113",
   appId: "1:670644838113:web:db46d08bf05e4c42eb61a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);