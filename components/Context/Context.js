"use client";
import { app } from "@/firebase.init"; // Ensure the correct path to your firebase.init.js

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [faq, setFaq] = useState([]);
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
        setLoading(false);

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // sign out
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUsers("");
        localStorage.setItem("users", JSON.stringify(""));
        setLoading(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")) || []);
  }, []);

  // data fetching
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

  useEffect(() => {
    fetch("https://school-server-git-main-yousufislammes-projects.vercel.app/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('teacher fetch api:::', error);
      })

  }, [])

  useEffect(() => {
    fetch("https://school-server-git-main-yousufislammes-projects.vercel.app/faq")
      .then((res) => res.json())
      .then((data) => {
        setFaq(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("faq deleting error:::", error);
      })

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

  return (
    <Context.Provider
      value={{
        handleLoginGoogle,
        handleSingOut,
        setTeachers,
        setStudents,
        handleSearch,
        users,
        filteredStudents,
        searchQuery,
        teachers,
        setFaq,
        faq,
        loading,
        students,
      }}
    >
      {children}
    </Context.Provider>
  );
};
