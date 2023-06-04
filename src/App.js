import React from "react";
import Dashboard from "./components/Dashboard";
import {  Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import Message from "./components/Message";
import Reports from "./components/Reports";
const App = () => {
  return (
    <div className="mainPage">
      <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/message" element={<Message />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
    </div>
  );
};

export default App;
