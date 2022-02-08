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
  ReferenceLine,
  ComposedChart,
} from "recharts";

import React from "react";
import { counterVoter } from "helpers/counter";

const CardBarChartVertical = ({ data, color, width }) => {
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
          layout="vertical"
          data={data}
          margin={{
            top: 35,
            right: 35,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="1 3" stroke="#c2c2c2" /> */}
          <YAxis
            width={width || 60}
            dataKey="name"
            type="category"
            stroke="#c2c2c2"
          />
          <XAxis type="number" stroke="#c2c2c2" />
          <ReferenceLine x={0} stroke="#c2c2c2" />
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

export default CardBarChartVertical;
