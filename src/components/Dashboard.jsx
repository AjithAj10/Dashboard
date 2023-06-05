import React from "react";
import "../styles.css";
import TopBar from "./TopBar";
import Overview from "./Overview";
import GraphSection from "./Graphs/GraphSection";
import Table from "./Table/Table";
const Dashboard = () => {
 

  return (
    <div className="chart">
      <TopBar />
      <Overview />
      <div className="graph-container">
        <GraphSection /> 
      </div>
      <Table />
    </div>
  );
};

export default Dashboard;
