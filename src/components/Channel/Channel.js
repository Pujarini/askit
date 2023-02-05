import React from "react";

const Channel = ({ name }) => {
  return (
    <div className="hover:bg-slate-900 p-1 text-slate-500 focus:text-white flex items-center justify-between">
      {" "}
      # {name}
      <button class="bg-slate-500 hover:bg-blue-700 text-white py-2 px-5 rounded-full m-2">
        Join
      </button>
    </div>
  );
};

export default Channel;
