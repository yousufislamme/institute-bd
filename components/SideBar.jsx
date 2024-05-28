import Link from "next/link";

const SideBar = () => {
  return (
    <div> 
      <nav className="h-screen w-52 bg-slate-400 p-2">
        <ul className="list-none flex flex-col gap-2 text-xl  p-4">
          <li>
             <Link href={"/dashboard/addStudent"}> Add student</Link>
          </li>
          <li> 
            <Link href={"/dashboard/addResult"}> add Result</Link>
          </li>
          <li> 
            <Link href={"/dashboard/addStudent"}> Manage student</Link>
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
