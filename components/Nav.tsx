import React from "react";
import { GiAtom } from "react-icons/gi";
import Link from "next/link";

const Nav = () =>{
  return (
    <main className=" nav flex text-white h-16 shadow-teal-900 w-full justify-between px-4 py-4 items-center">
      <div className=" text-6xl">
        <Link href={"/"}>
          <GiAtom/>
        </Link>
      </div>
      <div className="flex items-center gap-5 pr-6">
        <Link href={"/about"}>
          <h5>
            About
          </h5>
        </Link>
        <Link href = {"/contact"}>
          <h5>
            ContactUs
          </h5>
        </Link>
      </div>
    </main>
  )
}

export default Nav;
