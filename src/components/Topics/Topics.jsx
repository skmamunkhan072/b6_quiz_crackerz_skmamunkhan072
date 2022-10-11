import { useLoaderData } from "react-router-dom";
import QuizWraper from "../QuizWraper/QuizWraper";

const Topics = () => {
  const data = useLoaderData();
  return (
    <div>
      {data.data.questions.map((data) => (
        <QuizWraper key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Topics;
