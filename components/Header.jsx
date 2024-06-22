"use client";
import Login from "@/app/login/page";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { Context } from "./Context/Context";
const Header = () => {
  const { users } = useContext(Context);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Scroll down
    } else {
      setIsVisible(true); // Scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`first-letter: fixed top-0 z-50 w-full border-b-2 bg-white px-1 transition-transform duration-300 md:px-5 lg:px-20 ${
          !isVisible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex w-full items-center justify-end font-semibold">
          <div className="w-full">
            <Link className="text-xl" href="/">
              School Website
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
