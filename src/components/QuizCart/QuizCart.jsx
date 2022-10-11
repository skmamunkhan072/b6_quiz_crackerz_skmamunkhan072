import React from "react";
import Checkbox from "../Checkbox/Checkbox";

const QuizCart = ({ qutnData }) => {
  return (
    <div className="duration-300 transform border-sky-700 shadow-md	 rounded-xl bg-black border-2 border-deep-purple-accent-400 hover:-translate-y-2">
      <label className="cursor-pointer label">
        <div className="h-full p-5 rounded-r shadow-sm">
          <p className="text-sm mb-4">{qutnData ? qutnData : "No Data"}</p>
          <div className="form-control">
            <Checkbox />
          </div>
        </div>
      </label>
    </div>
  );
};

export default QuizCart;
