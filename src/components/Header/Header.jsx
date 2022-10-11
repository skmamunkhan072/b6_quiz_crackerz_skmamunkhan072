import React from "react";
import { Link } from "react-router-dom";

// {
//   /* <a href="#">Quiz Makear</a> */
// }
const Header = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 w-full drop-shadow-2xl	">
        <div className="w-10/12 mx-auto text-start">
          <div className="flex-1">
            <a className="text-xl" href="#">
              Quiz Makear
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li className="mr-4">
                <Link to="/home">Home</Link>
              </li>

              <li className="mr-4">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
