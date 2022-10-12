import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { LOdDataContext } from "../Root/Root";

const ChartBar = () => {
  const datas = useContext(LOdDataContext);
  const data = datas.data;
  console.log(data);
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  // ];
  // aspect={1}
  return (
    <div className="flex justify-center items-center mt-20">
      <ResponsiveContainer width={"60%"} aspect={1.5}>
        <BarChart
          width={200}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="name" content={ChartBar} />
          </Bar>
          <Bar dataKey="id" fill="#82ca9d" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBar;
