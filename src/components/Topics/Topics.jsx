import { useLoaderData } from "react-router-dom";
import QuizWraper from "../QuizWraper/QuizWraper";

const Topics = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="mt-20 text-5xl">{data.data.name} Quiz</h1>
      {data.data.questions.map((data) => (
        <QuizWraper key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Topics;
