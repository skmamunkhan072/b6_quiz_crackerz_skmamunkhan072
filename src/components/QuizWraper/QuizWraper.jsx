import React, { useState } from "react";
import QuizCart from "../QuizCart/QuizCart";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const QuizWraper = ({ data }) => {
  const [show, setShow] = useState(false);
  const { correctAnswer, id, options, question } = data;
  const shoHight = () => {
    setShow(!show);
  };
  const userAns = (ans) => {
    if (correctAnswer === ans) {
      console.log("sussfull ");
    } else {
      console.log("valo koira porack");
    }
  };

  return (
    <div className=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 shadow-md rounded-xl">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
        <p className="text-base  md:text-lg">
          {question ? question : "NO Data Found"}
        </p>

        <div className="flex justify-between mt-4 w-full ml-20 mb-27">
          <p className="text-4xl">
            Correct Answer: {show ? correctAnswer : ""}
          </p>
          <span onClick={shoHight} className="cursor-pointer mr-10">
            {show ? <AiFillEye size="30" /> : <AiFillEyeInvisible size="30" />}
          </span>
        </div>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2 sm:grid-cols-1">
        {options.map((qutnData) => (
          <QuizCart
            userAns={userAns}
            key={qutnData}
            qutnData={qutnData}
            id={qutnData.length}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizWraper;
