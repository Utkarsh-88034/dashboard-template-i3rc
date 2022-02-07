// import React from "react";
// import Chart from "chart.js";
// import { useSelector } from "react-redux";
// import selectedColumns from "helpers/selectedColumns";
// import { counterVoter } from "helpers/counter";

// export default function CardBarChart({ label, field }) {
//   const voterList = useSelector((state) => state.voterList);
//   const { voters } = voterList;
//   const dataSets = [];
//   const data = {
//     labels: label,
//     datasets: dataSets,
//   };

//   for (let i = 0; i < label.length; i++) {
//     const count = counterVoter(voters, field, label[i]);
//     const config = {
//       label: new Date().getFullYear(),
//       backgroundColor: "#ed64a6",
//       borderColor: "#ed64a6",
//       data: [count],
//       fill: false,
//       barThickness: 18,
//     };
//     dataSets.push(config);
//   }
//   const DATA_COUNT = 2;
//   const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

//   const numbers = (config) => {
//     var cfg = config || {};
//     var min = valueOrDefault(cfg.min, 0);
//     var max = valueOrDefault(cfg.max, 100);
//     var from = valueOrDefault(cfg.from, []);
//     var count = valueOrDefault(cfg.count, 8);
//     var decimals = valueOrDefault(cfg.decimals, 8);
//     var continuity = valueOrDefault(cfg.continuity, 1);
//     var dfactor = Math.pow(10, decimals) || 0;
//     var data = [];
//     var i, value;

//     for (i = 0; i < count; ++i) {
//       value = (from[i] || 0) + this.rand(min, max);
//       if (this.rand() <= continuity) {
//         data.push(Math.round(dfactor * value) / dfactor);
//       } else {
//         data.push(null);
//       }
//     }

//     return data;
//   };
//   console.log(data);
//   React.useEffect(() => {
//     let config = {
//       type: "bar",
//       data: {
//         labels: label,
//         datasets: [
//           {
//             label: "Female",
//             backgroundColor: "#ed64a6",
//             borderColor: "#ed64a6",
//             data: numbers(NUMBER_CFG),
//             fill: false,
//             barThickness: 100,
//           },
//           {
//             label: "Male",
//             backgroundColor: "#ed6426",
//             borderColor: "#ed64a4",
//             data: [30],
//             fill: false,
//             barThickness: 100,
//           },
//         ],
//       },
//       options: {
//         maintainAspectRatio: false,
//         responsive: true,
//         title: {
//           display: false,
//           text: "Orders Chart",
//         },
//         tooltips: {
//           mode: "index",
//           intersect: false,
//         },
//         hover: {
//           mode: "nearest",
//           intersect: true,
//         },
//         legend: {
//           labels: {
//             fontColor: "rgba(0,0,0,.4)",
//           },
//           align: "end",
//           position: "bottom",
//         },
//         scales: {
//           xAxes: [
//             {
//               display: false,
//               scaleLabel: {
//                 display: true,
//                 labelString: "Month",
//               },
//               gridLines: {
//                 borderDash: [2],
//                 borderDashOffset: [2],
//                 color: "rgba(33, 37, 41, 0.3)",
//                 zeroLineColor: "rgba(33, 37, 41, 0.3)",
//                 zeroLineBorderDash: [2],
//                 zeroLineBorderDashOffset: [2],
//               },
//             },
//           ],
//           yAxes: [
//             {
//               display: true,
//               scaleLabel: {
//                 display: false,
//                 labelString: "Value",
//               },
//               gridLines: {
//                 borderDash: [2],
//                 drawBorder: false,
//                 borderDashOffset: [2],
//                 color: "rgba(33, 37, 41, 0.2)",
//                 zeroLineColor: "rgba(33, 37, 41, 0.15)",
//                 zeroLineBorderDash: [2],
//                 zeroLineBorderDashOffset: [2],
//               },
//             },
//           ],
//         },
//       },
//     };
//     let ctx = document.getElementById("bar-chart").getContext("2d");
//     window.myBar = new Chart(ctx, config);
//   }, []);
//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//         <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full max-w-full flex-grow flex-1">
//               <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
//                 Performance
//               </h6>
//               <h2 className="text-blueGray-700 text-xl font-semibold">
//                 Total orders
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="p-4 flex-auto">
//           {/* Chart */}
//           <div className="relative h-350-px">
//             <canvas id="bar-chart"></canvas>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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
} from "recharts";

import React from "react";
import { counterVoter } from "helpers/counter";

const CardBarChart = ({ voters }) => {
  console.log(voters);

  const males = counterVoter(voters, "Gender", "Male");
  const females = counterVoter(voters, "Gender", "Female");

  const totalDemographic = females + males;

  const data = [
    {
      name: "Gender Demographics",
      Female: females,
      Male: males,
      NoOfPeople: totalDemographic,
    },
  ];

  const renderLineChart = (
    <div
      style={{
        backgroundColor: "rgb(51,65,85)",
        backdropFilter: "0.5",
        borderRadius: "5px",
        paddingBottom: "1rem",
      }}
    >
      <ResponsiveContainer width={"100%"} height={500}>
        <BarChart
          data={data}
          margin={{
            top: 35,
            right: 35,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 3" stroke="#c2c2c2" />
          <XAxis dataKey="name" stroke="#c2c2c2" />
          <YAxis stroke="#c2c2c2" />
          <Tooltip />
          <Bar dataKey="Female" fill="#6eacdb" />
          <Bar dataKey="Male" fill="#db6e6e" />

          <Legend
            wrapperStyle={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              margin: "0 1rem",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
  return renderLineChart;
};

export default CardBarChart;
