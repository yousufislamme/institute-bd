"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="h-screen w-52 bg-slate-400 p-2">
        <ul className="text-md flex list-none flex-col gap-5 p-4">
          <li>
            <Link
              href="/dashboard/addStudent"
              className={`rounded-md px-3 py-2 hover:bg-slate-500 ${
                pathname === "/dashboard/addStudent" ? "bg-slate-500" : ""
              }`}
            >
              Add student
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/addResult"
              className={`rounded-md px-3 py-2 hover:bg-slate-500 ${
                pathname === "/dashboard/addResult" ? "bg-slate-500" : ""
              }`}
            >
              Add Result
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/studentsList"
              className={`rounded-md px-3 py-2 hover:bg-slate-500 ${
                pathname === "/dashboard/studentsList" ? "bg-slate-500" : ""
              }`}
            >
              Students List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
