import React, { useEffect, useState } from "react";
import "../styles.css";
import TopBar from "./TopBar";
import Overview from "./Overview";
import GraphSection from "./Graphs/GraphSection";
import Table from "./Table/Table";
const Dashboard = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000/employe/");
      let fetchedData = await response.json();

      const filteredData = fetchedData.slice(20, 60);
      setData(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartOptions = {
    responsive: true,
  };

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
