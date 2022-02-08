import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const CardLineChart = ({ data, color }) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(51,65,85)",
        backdropFilter: "0.5",
        borderRadius: "5px",
        paddingBottom: "1rem",
        margin: "2rem",
      }}
    >
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          <XAxis dataKey="name" scale="band" stroke="#c2c2c2" />
          <YAxis stroke="#c2c2c2" />
          <Tooltip />
          <Legend
            wrapperStyle={{
              alignItems: "center",
              margin: "-1rem 0",
            }}
          />
          <Bar dataKey="Mean" barSize={40} fill={color} />
          <Line type="monotone" dataKey="Mean" stroke="#7ddaff" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CardLineChart;
