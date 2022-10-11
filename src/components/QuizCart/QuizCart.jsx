import React from "react";
const QuizCart = ({ qutnData, userAns }) => {
  return (
    <div
      onClick={() => userAns(qutnData)}
      className="duration-300 transform border-sky-700 shadow-md	 rounded-xl bg-black border-2 border-deep-purple-accent-400 hover:-translate-y-2"
    >
      <label className="cursor-pointer label">
        <div className="h-full p-5 rounded-r shadow-sm">
          <p className="text-sm mb-4">{qutnData ? qutnData : "No Data"}</p>
          <div className="form-control">
            <input
              type="radio"
              name="radio"
              className="checkbox checkbox-accent"
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default QuizCart;
