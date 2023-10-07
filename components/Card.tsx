import Image from "next/image";
import React from "react";
import Blog1 from "@/public/blog-app/blog_1.jpg";
import Link from "next/link";

const CardMockData = [
  {
    id: 1,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    category: "Fashion",
    image: Blog1,
    isNew: true,
  },
  {
    id: 2,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    category: "Fashion",
    image: Blog1,
    isNew: true,
  },
  {
    id: 3,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    category: "Fashion",
    image: Blog1,
    isNew: true,
  },
  {
    id: 4,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    category: "Fashion",
    image: Blog1,
    isNew: true,
  },
];

const Card = () => {
  return (
    <>
      {CardMockData.map((card) => (
        <div key={card.id}>
          <div className="card card-compact bg-base-100 shadow-xl mt-20 flex cursor-pointer">
            <Image src={card.image} alt="card-blog" className=" rounded-t-2xl" />
            <div className="card-body">
              <h2 className="card-title">
                {card.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{card.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{card.category}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
