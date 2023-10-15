import React from "react";

const statistic = {
  totalBlogs: 8,
  totalViews: "999,999",
};

const Statistics = () => {
  return (
    <>
      <div className="flex gap-10 md:flex-row flex-col">
        <div className="">
          <div className="card-body bg-neutral-100 rounded-2xl">
            <h2 className="card-title">Total Blogs</h2>
            <p className="text-4xl text-center">{statistic.totalBlogs}</p>
          </div>
        </div>
        <div className="">
          <div className="card-body bg-neutral-100 rounded-2xl">
            <h2 className="card-title">Total Views</h2>
            <p className="text-4xl text-center">{statistic.totalViews}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
