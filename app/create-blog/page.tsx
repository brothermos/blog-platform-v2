import React from "react";
import BackButton from "@/components/BackButton";

const page = () => {
  return (
    <div className="flex justify-center flex-col items-center md:px-24 pt-10 pb-24">
      <div className=" gap-6 flex flex-col">
        <div>
          <span className="label-text">Title</span>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick a file</span>
          </label>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        </div>
        <div>
          <span className="label-text">Description</span>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <span className="label-text">Category</span>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className=" justify-between gap-6 w-full max-w-xs flex">
          <BackButton />
          <button className="btn btn-active w-1/3 btn-neutral">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default page;
