"use client";
import { UserButton } from "@clerk/nextjs";
import UserMenu from "./UserMenu";
import { Download, Video } from "lucide-react"
import Link from "next/link"
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {
  return (
    <div className="pt-5 w-full">
      <div className="max-w-[1500px] mx-auto w-[90%] flex justify-between items-center border-b pb-5">
        <div>
          <Link href={"/"} className="flex gap-1 items-center text-2xl">
            <img src="https://bvpindia.com/wp-content/uploads/2018/10/logo_full-1024x911.jpg" alt="no logo" width={70} height={70} />
          </Link>
        </div>

        <div className="md:block hidden text-nowrap">
          <span className="bg-primary text-xl font-bold px-5 py-1 rounded-md text-white">
            BHARAT KO JAANO
          </span>
        </div>

        <div className="flex items-center gap-3 justify-end space-x-1">
          <div>
            <GoogleTranslate />
          </div>

          <a href="/download" target="_blank">
            <Download size={20} />
          </a>
          <a href="/video">
            <Video size={20} />
          </a>
          <UserMenu />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

