import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.scss";
import { Input } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

let rows = [
  createData("Lasania Chiken Fri", 18908424, "2022-06-05", "Approved"),
  createData("Big Baza Bang ", 18908424, "2023-04-02", "Pending"),
  createData("Mouth Freshner", 18908424, "2023-08-10", "Approved"),
  createData("Cupcake", 18908421, "2024-12-13", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const [date, setDate] = useState();
  const [tableValues, setTableValues] = useState(rows);

  function getDate(e) {
    setDate(e.target.value);
  }
  useEffect(() => {
    if (date) {
      var date2 = new Date(date.split("/").reverse().join("-"));
      const data = rows.filter((item) => {
        var date1 = new Date(item.date.split("/").reverse().join("-"));
        return  date1.getTime() < date2.getTime() ;
      });
      setTableValues(data);
    }
  }, [date]);

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">
                <Input type="date" value={date} onChange={getDate} />
              </TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {tableValues.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
