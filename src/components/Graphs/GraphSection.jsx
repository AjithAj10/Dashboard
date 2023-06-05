import React from "react";
import { cardsData } from "../data/data";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import "./Graph.scss";

import Chart from "react-apexcharts";

const GraphSection = () => {
  let data = {
    options: {
      chart: {
        id: "basic-bar",
      },
     
      markers: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
      },
      dropShadow: {
        enabled: false,
        enableOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
      },
      fill: {
        colors: ["#7479e8"],
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#7479e8"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
        borderColor: "#dae1ef",
        strokeDashArray: 0,
        opacity: 0.1,
        position: "back",
      },
      xaxis: {
        category: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 20, 49, 30, 70, 51],
      },
    ],
  };

  let param = cardsData[0];
  return (
    <motion.div
      className="Graph"
      style={{
        background: "white",
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <span className="graph-header">{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

export default GraphSection;
