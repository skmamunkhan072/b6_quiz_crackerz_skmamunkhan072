import { Link } from "react-router-dom";
import "./CArt.css";
const Cart = ({ data, ShowMor }) => {
  const { id, logo, name } = data;
  return (
    <div
      id="cart"
      className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 mx-auto  sm:w-[300px] dark:bg-gray-900 dark:text-gray-100"
    >
      <img
        src={logo}
        alt="NO found"
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <p className="mt-3 text-xs font-semibold tracking-wide uppercase">
            <span className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              weekend
            </span>
            <span className="text-gray-600">— 1 Feb 2020</span>
          </p>
          <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
        </div>
        <div className="flex justify-center pt-2 space-x-4 items-center">
          <Link
            id={id}
            className="inline-flex items-center space-x-2 text-sm dark:text-violet-400"
            to={`/topics/${id}`}
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
