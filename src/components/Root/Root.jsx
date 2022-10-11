import React from "react";
import { Outlet } from "react-router-dom";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Cart />
      <Footer></Footer>
    </div>
  );
};

export default Root;
