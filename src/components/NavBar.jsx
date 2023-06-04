import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./navBar.scss";
import { useState } from "react";
import { Link, Routes } from "react-router-dom";

const navData = [
  { label: "dashboard", icon: GridViewIcon },
  { label: "products", icon: ViewInArIcon },
  { label: "orders", icon: ShoppingCartOutlinedIcon },
  { label: "customers", icon: PersonOutlinedIcon },
  { label: "message", icon: ChatBubbleOutlineOutlinedIcon },
  { label: "reports", icon: DescriptionOutlinedIcon },
];
const NavBar = () => {
  const [selected, setSelected] = useState('dashboard');
  
  return (
    <div className="navbar">
      <div className="logo">Woo.</div>
      {navData.map((item) => {
        return (
          <Link to={`/${item.label}`}>
            <div
              className={
                selected === item.label ? "menuItem-active" : "menuItem"
              }
              onClick={() => setSelected(item.label)}
            >
              <div className="menuIcon">
                <item.icon />
              </div>
              <div className="menuLabel">{item.label}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
