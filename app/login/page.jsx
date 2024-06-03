"use client";
import Button from "@/components/Button";
import { app } from "@/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // localStorage save the user
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <p>
        Name: <span className="font-bold">{user.displayName}</span>
      </p>
      <p>
        Email: <span className="font-bold"> {user.email}</span>
      </p>
      <img
        className="h-10 w-10 rounded-full"
        src={user.photoURL}
        alt={user.displayName}
      />
      {user.emailVerified == true ? null : (
        <Button
          onClick={handleLoginGoogle}
          BtnTitle="Login with Google"
          className="rounded-lg bg-yellow-400 px-5 py-2"
        />
      )}
    </div>
  );
};

export default Login;
