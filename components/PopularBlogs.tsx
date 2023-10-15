"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import popularData from "@/constants/Popular";

const Card = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredNames = popularData.filter(
    (name) =>
      name.title.trim().toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      name.category.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
  );
  return (
    <>
      <div className="navbar flex justify-center bg-neutral text-neutral-content p-4 rounded-2xl text-2xl">
        Popular Blogs
      </div>
      <div className="form-control">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="ชื่อหรือหมวดหมู่"
          className="input input-bordered w-auto"
        />
      </div>
      <div className="grid gap-20 grid-rows md:grid-cols-4">
        {filteredNames.map((post) => (
          <div key={post.id}>
            <Link href={`/blogs/${post.id}`}>
              <div className="card bg-base-100 shadow-xl flex cursor-pointer">
                <Image src={post.image} alt="card-blog" className=" rounded-t-2xl" />
                <div className="card-body gap-4">
                  <h2 className="card-title">
                    {post.title}
                    <div className="badge badge-warning">HOT!</div>
                  </h2>
                  <div className="card-actions justify-between">
                    <span className=" text-gray-400">views: {post.views}</span>
                    <div className="badge badge-outline">{post.category}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
