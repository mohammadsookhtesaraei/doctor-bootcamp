"use client"
import { ReactElement} from "react"

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


type HeaderProps={};

 const Header = ({}:HeaderProps):ReactElement => {
  const pathName=usePathname();
  return (
    <header className="flex items-center gap-2 py-4 shadow-400">
      <nav className="me-auto">
        <ul className="flex gap-2">
          <li>
            <Link className={clsx(pathName === "/"&&"text-primary")} href="/">خانه</Link>
          </li>
           <li>
            <Link className={clsx(pathName === "/search"&&"text-primary")}href="/search"> جستجو</Link>
          </li>
        </ul>
      </nav>
      <button>ورود/ثبت نام</button>
    </header>
  );
}

export default Header;
