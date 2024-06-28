import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-5 font-semibold text-slate-100 xl:px-20">
      <div className="flex items-start justify-between">
        {/* line one */}
        <div>
          <h2 className="text-lg font-semibold">School Website</h2>
        </div>
        {/* line two */}
        <div>
          <h2 className="text-lg font-semibold">Links</h2>
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">News</Link>
            </li>
            <li>
              <Link href="/">Notices</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">social</h2>
          <ul className="font-normal">
            <li>
              <a href="https://x.com">X</a>
            </li>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <p>school website © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
