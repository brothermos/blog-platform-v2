import React from "react";
import Avatar from "@/public/blog-app/avatar.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="w-full rounded-xl bg-slate-100">
      <div className="flex-col md:flex-row flex items-center p-10 gap-20">
        <div>
          <h1 className="text-base md:text-xl font-bold">Welcome to my blog!</h1>
          <p className="py-6 text-xs md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deserunt officiis tempore quia ipsam
            incidunt earum ab? Iure consectetur quas culpa magni facere id dolorum quo, est officiis vitae? Repudiandae.
          </p>
          <button className="btn btn-neutral">Get Started</button>
        </div>
        <Image src={Avatar} className=" md:max-w-md bg-white rounded-xl shadow-2xl" alt="profile" />
      </div>
    </div>
  );
};

export default Banner;
