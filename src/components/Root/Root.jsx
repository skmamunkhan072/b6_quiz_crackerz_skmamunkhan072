import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const LOdDataContext = createContext([]);
const Root = () => {
  const lodData = useLoaderData([]);
  return (
    <LOdDataContext.Provider value={lodData}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </LOdDataContext.Provider>
  );
};

export default Root;
