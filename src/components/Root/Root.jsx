import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "react-toastify/dist/ReactToastify.css";

export const LOdDataContext = createContext([]);
const Root = () => {
  const lodData = useLoaderData([]);
  return (
    <LOdDataContext.Provider value={lodData}>
      <div>
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer />
      </div>
    </LOdDataContext.Provider>
  );
};

export default Root;
