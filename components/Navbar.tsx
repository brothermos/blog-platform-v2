import Image from "next/image";
import React from "react";
import MyProfile from "@/public/blog-app/my_profile.jpg";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <>
      <div className="navbar bg-base-100 px-24 py-6 hidden md:flex">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost normal-case rounded-xl text-4xl">
            BlogV2
          </Link>
        </div>

        <div className="menu navbar-center menu-horizontal bg-neutral text-neutral-content rounded-lg gap-6 normal-case text-xl">
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

        <div className="gap-4 navbar-end flex">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <Image src={MyProfile} alt="profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
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

      {/* mobile */}
      <div className="navbar bg-base-100 md:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 gap-2 rounded-box w-52"
            >
              <Link href="/">Home</Link>
              <Link href="/about-us">About us</Link>
              <Link href="/create-blog">Create New Blog</Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">BLOG</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={MyProfile} alt="profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
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
    </>
  );
};

export default Navbar;
