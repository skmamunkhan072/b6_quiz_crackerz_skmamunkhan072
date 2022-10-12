import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tost = () => {
  //   const clickMe = () => {
  //     alert("heello");
  //     toast("🦄 Wow so easy!", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       theme: "light",
  //     });
  //   };
  const ClickTost = () => {
    if (true) {
      toast("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>
      {/* <button onClick={clickMe}>helelo</button> */}
      <ToastContainer />;<button onClick={ClickTost}>Click tost</button>
    </div>
  );
};

export default Tost;
