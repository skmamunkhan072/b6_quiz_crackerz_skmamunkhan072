import React from "react";
import BlogCart from "../BlogCart/BlogCart";
import "./Blog.css";

const Blog = () => {
  const data = [
    {
      id: 1,
      quistion: "what is the purpose of react router ?",
      ans: "ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.",
    },
    {
      id: 2,
      quistion: "",
      ans: "",
    },
    {
      id: 3,
      quistion: "how does context api work ?",
      ans: 'The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.',
    },
  ];
  return (
    <div className="bg-slate-900 pt-10">
      <div
        id="blog_wraper"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 shadow-md rounded-xl"
      >
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2 sm:grid-cols-1">
          <BlogCart />
          <BlogCart />
          <BlogCart />
        </div>
      </div>
    </div>
  );
};

export default Blog;
