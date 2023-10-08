import BackButton from "@/components/BackButton";
import React from "react";
import MyProfile from "@/public/blog-app/my_profile.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center flex-col gap-4 items-center px-4 md:px-24 pt-10 pb-24">
      <Image src={MyProfile} alt="profile" className="w-60 rounded-3xl" />
      <span className="text-4xl">Natdanai Kanyakoon</span>
      <span className="text-2xl">Frontend Developer</span>
      <span className="text-xl">Prince of Songkhla University</span>
      <span className="text-xl">Email: moss10612@gmail.com</span>
      <span className="text-xl">Facebook: Natdanai Kanyakoon</span>
      <BackButton />
    </div>
  );
};

export default page;
