import Link from "next/link";
import React from "react";
import Result from "./../app/result/page";

const SideBar = () => {
  return (
    <div>
      {" "}
      <nav className="h-screen w-52 bg-slate-400">
        <li>
          {" "}
          <Link href={"/dashboard/addStudent"}> add student</Link>
        </li>
        <li>
          {" "}
          <Link href={"/dashboard/addStudent"}> add Result</Link>
        </li>
        <li>
          {" "}
          <Link href={"/dashboard/addStudent"}> Manage student</Link>
        </li>
      </nav>
    </div>
  );
};

export default SideBar;
