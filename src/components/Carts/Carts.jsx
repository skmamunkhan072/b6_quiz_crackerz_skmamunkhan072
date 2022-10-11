import React, { createContext, useContext } from "react";
import Cart from "../Cart/Cart";
import { LOdDataContext } from "../Root/Root";
import "./Carts.css";
export const CountNomberContext = createContext([]);
const Carts = () => {
  const imge = [
    "img/React.png",
    "img/Css.png",
    "img/Javascript.png",
    "img/Git.png",
  ];
  const datas = useContext(LOdDataContext);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div
        id="cart-wraper"
        className="grid gap-8 lg:grid-cols-3 md:grid-cols-2  sm:max-w-full sm:mx-auto lg:max-w-full"
      >
        {imge.map((img) => (
          <Cart img={img} key={img} />
        ))}
      </div>
    </div>
  );
};

export default Carts;
