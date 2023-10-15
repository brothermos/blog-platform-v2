"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import postsData from "@/constants/Data";

interface BlogsProps {
  id: number;
  title: string;
  description: string;
  category: string;
  views: string;
  image: StaticImageData;
}

const Blogs = (): JSX.Element => {
  const [blogsList, setBlogsList] = useState<BlogsProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  useEffect(() => {
    return setBlogsList(postsData);
  }, []);

  const filteredBlogs = useMemo(() => {
    const getFilteredBlogs = () => {
      if (!selectedCategory) {
        return blogsList;
      }
      return blogsList.filter((item) => item.category === selectedCategory);
    };
    return getFilteredBlogs();
  }, [blogsList, selectedCategory]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="navbar mt-10 flex justify-center bg-neutral text-neutral-content p-4 rounded-xl text-2xl">
        All Blogs
      </div>

      <div className="flex gap-8 md:flex-row flex-col">
        <select onChange={handleCategoryChange} className="select select-bordered w-auto">
          <option disabled selected>
            Selecte Category
          </option>
          <option value="">All</option>
          <option value="Anime">Anime</option>
          <option value="Movie">Movie</option>
          <option value="Game">Game</option>
          <option value="Football">Football</option>
        </select>
      </div>
      <div className="grid grid-rows-4 md:gap-20 gap-10 md:grid-cols-4 md:grid-rows-none">
        {filteredBlogs.map((post) => (
          <div key={post.id}>
            <Link href={`/blogs/${post.id}`}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                <Image src={post.image} alt="blog" className=" object-fill w-full h-72  rounded-t-lg" />
                <div className="p-6">
                  <span className="mb-2 text-2xl flex items-center font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                    <div className="badge badge-success ml-2">NEW!</div>
                  </span>
                  <div className="flex justify-between mt-4">
                    <span className=" text-gray-400">views: {post.views}</span>
                    <span className="badge badge-outline">{post.category}</span>
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

export default Blogs;
