import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { LayoutGroup, motion } from "framer-motion";
import "./Card.scss";
import Chart from "react-apexcharts";
import { CircularProgressbar } from "react-circular-progressbar";
import { UilTimes } from "@iconscout/react-unicons";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
       {expanded ? (
        <ExpandedCard param={props.data} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props.data} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

const ExpandedCard = ({ param, setExpanded }) => {
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
    className="ExpandedCard"
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow,
    }}
    layoutId="expandableCard"
  >
    <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
      <UilTimes onClick={setExpanded} />
    </div>
      <span>{param.title}</span>
    <div className="chartContainer">
      <Chart options={data.options} series={param.series} type="area" />
    </div>
    <span>Last 24 hours</span>
  </motion.div>
  );
};

export default Card;
