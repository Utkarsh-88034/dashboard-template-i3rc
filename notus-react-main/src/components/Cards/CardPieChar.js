import React, { PureComponent, useEffect, useRef, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";
  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy + 10} dy={8} textAnchor="middle" fill={fill}>
        {payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={"#fff"}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={"#000"}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={"#000"} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
        style={{
          fontSize: Math.max(window.innerWidth / 85, 12),
        }}
      >{`${payload.name} ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#fff"
        style={{
          fontSize: Math.max(window.innerWidth / 85, 12),
        }}
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const CardPieChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const [width, setWidth] = useState((2 * window.innerWidth) / 3);
  const [height, setHeight] = useState(window.innerHeight / 2);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth / 2);
    setHeight(window.innerHeight / 2);
  });

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(51,65,85)",
          backdropFilter: "0.5",
          borderRadius: "5px",
          paddingBottom: "1rem",
          margin: "2rem",
          //   marginLeft: "3rem",
        }}
      >
        {/* <ResponsiveContainer width={"100%"} height={"100%"}> */}
        <PieChart width={Math.max(width, 320)} height={Math.max(width, 320)}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={"25%"}
            outerRadius={"50%"}
            fill={`rgb(200, 150, ${Math.random() * 255 + 50})`}
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
        {/* </ResponsiveContainer> */}
      </div>
    </>
  );
};

export default CardPieChart;
