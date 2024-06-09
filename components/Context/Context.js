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
   const [searchQuery, setSearchQuery] = useState("");
   const [students, setStudents] = useState([]);
   const [loading, setLoading] = useState(true);


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
      fetch(
         "https://school-server-git-main-yousufislammes-projects.vercel.app/users",
      )
         .then((res) => res.json())
         .then((data) => {
            setStudents(data);
            setLoading(false);
         })
         .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
         });
   }, []);

   // search query
   const handleSearch = (event) => {
      setSearchQuery(event.target.value);
   };
   const filteredStudents = students.filter((student) => {
      if (!student.studentName) {
         return false;
      }

      const studentNameLower = student.studentName.toLowerCase();
      const studentEmailLower = student.email?.toLowerCase() || "";
      const searchQueryLower = searchQuery.toLowerCase();

      return (
         studentNameLower.includes(searchQueryLower) ||
         studentEmailLower.includes(searchQueryLower)
      );
   });
   useEffect(() => {
      setUsers(JSON.parse(localStorage.getItem("users")) || []);
   }, []);

   return (
      <Context.Provider value={{ handleLoginGoogle, users, filteredStudents, searchQuery, handleSearch, loading, students, setStudents }}>
         {children}
      </Context.Provider>
   );

};

