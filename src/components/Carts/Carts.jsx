import React from "react";
import Cart from "../Cart/Cart";
import "./Carts.css";

const Carts = () => {
  const img = [
    "img/React.png",
    "img/Css.png",
    "img/Javascript.png",
    "img/Git.png",
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div
        id="cart-wraper"
        className="grid gap-8 lg:grid-cols-3 md:grid-cols-2  sm:max-w-full sm:mx-auto lg:max-w-full"
      >
        {img.map((img) => (
          <Cart img={img} key={img} />
        ))}
      </div>
    </div>
  );
};

export default Carts;
