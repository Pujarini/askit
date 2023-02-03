import React from "react";
import { Link } from "react-router-dom";
import { categoryTags } from "../../../utils/categoryTags";
import Upvotes from "./Upvotes";

const PostCard = () => {
  return (
    <div className="flex border border-slate-200 rounded-sm bg-[#1A1A1B] m-5">
      <Upvotes />
      <Link to="/react/hello">
        <div className=" p-2 m-2 flex flex-col justify-between">
          <div className="text-slate-500 text-sm">
            Posted by u/Icey_Girl 1 day ago
          </div>
          <div>
            {" "}
            <span className="text-3xl">Title</span>{" "}
            <button
              class={`bg-[${categoryTags.General}] text-white font-bold py-2 px-4 rounded-full m-2`}
            >
              General
            </button>
          </div>

          <div className="flex gap-4 text-slate-500 text-sm ">
            <div className="hover:bg-slate-300 cursor-pointer">25 comments</div>
            <div className="hover:bg-slate-300 cursor-pointer">save</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
