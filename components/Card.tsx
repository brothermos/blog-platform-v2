import Image from "next/image";
import React from "react";
import Link from "next/link";
import postsData from "@/constants/Data";

const Card = () => {
  return (
    <>
      {postsData.map((post) => (
        <div key={post.id}>
          <div className="card bg-base-100 shadow-xl flex cursor-pointer">
            <Link href={`/blogs/${post.id}`}>
              <figure>
                <Image src={post.image} alt="card-blog" className=" rounded-t-2xl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {post.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{post.category}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
