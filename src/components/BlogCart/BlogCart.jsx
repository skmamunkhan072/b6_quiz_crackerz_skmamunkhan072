import React from "react";

const BlogCart = ({ data }) => {
  return (
    <div className="duration-300 transform border-sky-700 shadow-md 	 rounded-xl bg-black border-2 border-deep-purple-accent-400 hover:-translate-y-2">
      <h1 className="mt-4 text-2xl">
        {data.quistion ? data.quistion : "No Data Found"}
      </h1>
      <div className="h-full p-5 rounded-r shadow-sm">
        <p className="text-sm mb-4">{data.ans ? data.ans : "No Data Found"}</p>
      </div>
    </div>
  );
};

export default BlogCart;
