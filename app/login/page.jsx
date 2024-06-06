"use client";
import Button from "@/components/Button";
import { Context } from "@/components/Context/Context";

import { useContext } from "react";

const Login = () => {
  const { handleLoginGoogle, users } = useContext(Context);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <p>
        Name: <span className="font-bold">{users.displayName}</span>
      </p>
      <p>
        Email: <span className="font-bold">{users.email}</span>
      </p>
      <img
        className="h-10 w-10 rounded-full"
        src={users.photoURL}
        alt={users.displayName}
      />
      {users.emailVerified == true ? null : (
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
