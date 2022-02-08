import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

import React from "react";
import { counterVoter } from "helpers/counter";

const CardBarChartHorizontal = ({ data, color }) => {
  const renderLineChart = (
    <div
      style={{
        backgroundColor: "rgb(51,65,85)",
        backdropFilter: "0.5",
        borderRadius: "5px",
        paddingBottom: "1rem",
        margin: "2rem",
      }}
    >
      <ResponsiveContainer width={"100%"} height={500}>
        <ComposedChart
          data={data}
          margin={{
            top: 35,
            right: 35,
            left: 0,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="1 3" stroke="#c2c2c2" /> */}
          <XAxis dataKey="name" stroke="#c2c2c2" />
          <YAxis stroke="#c2c2c2" />
          <Tooltip />
          {/* <Bar dataKey="count" fill="#6eacdb" /> */}
          <Bar dataKey="Count" fill={color || "#db6e6e"} />

          {/* <Legend
            wrapperStyle={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              margin: "0 1rem",
            }}
          /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
  return renderLineChart;
};

export default CardBarChartHorizontal;
