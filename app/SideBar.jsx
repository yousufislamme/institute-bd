"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiStickyNote, CiViewList } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
const SideBar = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="h-screen w-52 bg-slate-200 p-2">
        <ul className="text-md flex list-none flex-col gap-4">
          <li>
            <Link
              href="/dashboard/addStudent"
              className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-500 ${
                pathname === "/dashboard/addStudent"
                  ? "bg-slate-500 text-white"
                  : ""
              }`}
            >
              <FaRegAddressCard />
              Add student
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/studentsList"
              className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-500 ${
                pathname === "/dashboard/studentsList" ? "bg-slate-500" : ""
              }`}
            >
              <CiViewList />
              Students List
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/notices"
              className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-500 ${
                pathname === "/dashboard/notices" ? "bg-slate-500" : ""
              }`}
            >
              <CiStickyNote /> Notices
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
