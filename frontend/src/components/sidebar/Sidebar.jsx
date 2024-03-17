import React from "react";
import "./Sidebar.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { PiCodesandboxLogoLight } from "react-icons/pi";
// li
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiCylinderLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import LogoutPopup from "../logoutPopup/LogoutPopup";

const Sidebar = () => {
  const location = useLocation();
  console.log("location >> ", location.pathname);
  const test = () => {
    alert("Logout Successfull");
  };

  return (
    <div className="container-flex">
      <div className="sidebar-wrapper">
        <div className="logo">
          <PiCodesandboxLogoLight />
          <Link to="/dashboard">Pro Manage</Link>
        </div>
        <ul>
          <li>
            <Link to="/dashboard">
              <MdOutlineSpaceDashboard className="icon-size" /> Board
            </Link>
          </li>
          <li>
            <Link to="/dashboard/analytics">
              <PiCylinderLight className="icon-size" /> Analytics
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings">
              <CiSettings className="icon-size" /> Settings
            </Link>
          </li>
        </ul>
        <LogoutPopup
          title="Are you sure you want to logout?"
          btnText="Logout"
          actionFunction={test}
        />
      </div>
      <div className="children">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
