import Link from "next/link";

const SideBar = () => {
  return (
    <div>
      <nav className="h-screen w-52 bg-slate-400 p-2">
        <ul className="flex list-none flex-col gap-2 p-4 text-xl">
          <li>
            <Link href={"/dashboard/addStudent"}> Add student</Link>
          </li>
          <li>
            <Link href={"/dashboard/addResult"}> add Result</Link>
          </li>

          <li>
            <Link href={"/dashboard/studentsList"}> Students List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
