"use client";
import Login from "@/app/login/page";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "./Context/Context";
const Header = () => {
  const { users } = useContext(Context);
  return (
    <>
      <header className="border-b-2 px-1 md:px-5">
        <div className="flex items-center font-semibold">
          <div>
            <Link className="text-xl" href="/">
              Institute
            </Link>
          </div>
          {/* navigation */}
          <div className="menu flex w-full items-center justify-center gap-1">
            <Link className="px-1 py-2" href="/students">
              Students
            </Link>
            <Link className="px-1 py-2" href="/blog">
              Blog
            </Link>
            <Link className="px-1 py-2" href="/about">
              About
            </Link>
            <Link className="px-1 py-2" href="/dashboard">
              Dashboard
            </Link>
          </div>
          <div>
            <Link className="" href="/login">
              {users ? "LogOut" : <Login />}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
