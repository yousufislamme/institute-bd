"use client"; 
import { app } from "@/firebase.init"; // Ensure the correct path to your firebase.init.js
 
import {
   GoogleAuthProvider,
   getAuth,
   signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
   const [users, setUsers] = useState([]);

   // Ensure getAuth is called with the initialized app
   const auth = getAuth(app);
   const googleProvider = new GoogleAuthProvider();

   const handleLoginGoogle = () => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            const user = result.user; // Ensure this is singular as result.user is a single user object
            setUsers(user); // Update state with the user object
            localStorage.setItem("users", JSON.stringify(user));
         })
         .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
         });
   };

   useEffect(() => {
      setUsers(JSON.parse(localStorage.getItem("users")) || []);
   }, []);

   return (
      <Context.Provider value={{ handleLoginGoogle, users }}>
         {children}
      </Context.Provider>
   );
 
};
 
