import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { LayoutGroup, motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import "./card.css";
import Chart from "react-apexcharts";

const SingleCard = (props) => {
  const [expand, setExpand] = useState(false);

  return (
    <LayoutGroup>
      {expand ? (
        <ExpandCard params={props} setExpand={() => setExpand(false)} />
      ) : (
        <CompactCard params={props} setExpand={() => setExpand(true)} />
      )}
    </LayoutGroup>
  );
};

const CompactCard = ({ params, setExpand }) => {
  let data = {
    options: {
      chart: {
        id: "basic-bar",
        width: 10,
        height: 100,
      },
      grid: {
        show: true,
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
        colors: ["#fff"],
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
        colors: ["#fff"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
        borderColor: "black",
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
  return (
    <motion.div
      className="CompactCard"
      layoutId="expandedCard"
      onClick={() => setExpand(true)}
    >
      <div className="card">
        <div className="data">
          <div className="title">{params.data.title}</div>
          <div className="value">{params.data.value}</div>
        </div>
        
          {/* <Chart
            options={data.options}
            series={data.series}
            type="area"
            width="500"
          /> */}
       
      </div>
    </motion.div>
  );
};

const ExpandCard = ({ params, setExpand }) => {
  let data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      grid: {
        show: true,
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
        colors: ["#fff"],
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
        colors: ["#fff"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
        borderColor: "black",
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

  return (
    <motion.div className="expandedCard" layoutId="expandedCard">
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        width="500"
      />
    </motion.div>
  );
};

export default SingleCard;
