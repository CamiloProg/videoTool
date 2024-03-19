import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";
import "./DashBoardLayout.css";
export default function DashBoardLayout() {
  return (
    <div className='content'>
      <SideBar />
      <Outlet />
    </div>
  );
}
