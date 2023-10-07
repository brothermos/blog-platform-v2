import Image from "next/image";
import React from "react";
import MyProfile from "@/public/blog-app/my_profile.jpg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-24 py-6">
      <div className=" navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-4xl">
          Blog
        </Link>
      </div>

      <div className=" navbar-center gap-6 normal-case text-xl">
        <Link href="/" className="btn btn-ghost">
          Home
        </Link>
        <Link href="/about-us" className="btn btn-ghost">
          About us
        </Link>
        <Link href="/create-blog" className="btn btn-ghost">
          Create New Blog
        </Link>
      </div>

      <div className="navbar-end gap-4">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-12 rounded-full">
              <Image src={MyProfile} alt="profile" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link href="/profile" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
