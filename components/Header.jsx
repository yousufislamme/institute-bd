import Link from "next/link";
import Dashboard from "./../app/dashboard/page";
const Header = () => {
  return (
    <>
      <header className="  border-b-2 px-1 md:px-5">
        <div className=" font-semibold flex items-center">
          <div>
            <Link className=" text-xl" href="/">
              Institute bd
            </Link>
          </div>
          {/* navigation */}
          <div className="menu w-full flex items-center justify-center gap-1">
            <Link className=" py-2 px-1" href="/students">
              Students
            </Link>
            <Link className=" py-2 px-1" href="/result">
              result
            </Link>
            <Link className=" py-2 px-1" href="/blog">
              Blog
            </Link>
            <Link className=" py-2 px-1" href="/about">
              About
            </Link>
            <Link className=" py-2 px-1" href="/dashboard">
              Dashboard
            </Link>
          </div>
          <div>
            <Link className="" href="/login">
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
