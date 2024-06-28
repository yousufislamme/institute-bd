"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiEdit, CiStickyNote, CiViewList } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { TbArrowsRandom } from "react-icons/tb";

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
          <li>
            <Link
              href="/dashboard/write-blog"
              className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-500 ${
                pathname === "/dashboard/write-blog" ? "bg-slate-500" : ""
              }`}
            >
              <CiEdit /> Write a Blog
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/addTeachers"
              className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-500 ${
                pathname === "/dashboard/addTeachers" ? "bg-slate-500" : ""
              }`}
            >
              <IoIosPersonAdd />
              Add Teacher
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/addRole"
              className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-500 ${
                pathname === "/dashboard/addRole" ? "bg-slate-500" : ""
              }`}
            >
              <TbArrowsRandom />
              Add Role
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
