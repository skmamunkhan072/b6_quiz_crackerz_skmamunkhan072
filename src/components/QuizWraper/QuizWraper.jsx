import React from "react";
import QuizCart from "../QuizCart/QuizCart";

const QuizWraper = ({ data }) => {
  //   console.log(data);
  const { correctAnswer, id, options, question } = data;
  console.log(correctAnswer);
  return (
    <div className=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 shadow-md rounded-xl">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
        <p className="text-base  md:text-lg">
          {question ? question : "NO Data Found"}
        </p>
        <p className="text-end ml-20 mb-20">l</p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2 sm:grid-cols-1">
        {options.map((qutnData) => (
          <QuizCart key={qutnData} qutnData={qutnData} />
        ))}
      </div>
    </div>
  );
};

export default QuizWraper;
