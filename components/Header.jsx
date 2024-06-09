"use client";
import Login from "@/app/login/page";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "./Context/Context";
const Header = () => {
  const { users } = useContext(Context);
  return (
    <>
      <header className="first-letter: border-b-2 px-1 md:px-5 lg:px-20">
        <div className="flex w-full items-center justify-end font-semibold">
          <div className=" ">
            <Link className="text-xl" href="/">
              Institute
            </Link>
          </div>
          {/* navigation */}
          <div className="flex w-full items-center justify-end gap-5">
            <Link className="px-1 py-2" href="/blog">
              Blog
            </Link>
            <Link className="px-1 py-2" href="/about">
              About
            </Link>
            <Link className="px-1 py-2" href="/dashboard">
              Dashboard
            </Link>

            <Link className="" href="/login">
              {users ? "Login" : <Login />}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
