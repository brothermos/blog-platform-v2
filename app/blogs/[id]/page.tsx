import BackButton from "@/components/BackButton";
import postsData from "@/constants/Data";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface BlogDetailProps {
  params: {
    id: string;
  };
}

interface Post {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  category: string;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ params }) => {
  const post = postsData.find((post) => post.id === parseInt(params.id)) as Post | undefined;

  if (!post) {
    return <div>Post not found</div>;
  }
  console.log(post.id);
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center md:px-24 pt-10 pb-24">
        <div className=" gap-8 flex flex-col w-full px-6">
          <h2 className=" font-bold text-4xl">Title: {post.title}</h2>
          <Image className="rounded-2xl" src={post.image.src} alt={post.image.src} width={100} height={100} />
          <span className=" md:text-xl space break-words">{post.description}</span>
          <span>ประเภท: {post.category}</span>
          <div>
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
