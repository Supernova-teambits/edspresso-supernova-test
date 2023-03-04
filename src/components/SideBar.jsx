import React from "react";
import { useRecoilValue } from "recoil";
import { userRoleState } from "../recoil/atoms";
import "./Sidebar.scss";

function Sidebar() {
  const userRole = useRecoilValue(userRoleState);

  const adminMenu = (
    <div className="sidebar-menu">
      <h4>
        <img alt="" src="adminicon"></img>Admin
      </h4>
      <p>_______________________</p>
      <ul className="menu-item">
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/administration">Administration</a>
        </li>
        <li>
          <a href="/analytics">Analytics</a>
        </li>
        <li>
          <a href="/management">Training Management</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li style={{ marginTop: "50px" }}>
          <a href="/notifications">Notifications</a>
        </li>
        <li>
          <a href="/help">Help</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </div>
  );

  const traineeMenu = (
    <>
      <div className="sidebar-menu">
        <h4>
          <img alt="" src="traineeicon"></img>Trainee
        </h4>
        <p>_______________________</p>
        <ul className="menu-item">
          <li>
            <a href="/app">
              <img alt="" src="bookicon"></img>My Learnings
            </a>
          </li>
          <li>
            <a href="/Dashboard">
              <img alt="" src="charticon"></img>Trainee Progress
            </a>
          </li>
          <li style={{ marginTop: "50px" }}>
            <a className="menu-item" href="/Notifications">
              <img alt="" src="bellicon"></img>Notifications
            </a>
          </li>
          <li>
            <a href="/Help">
              <img alt="" src="helpicon"></img>Help
            </a>
          </li>
          <li>
            <a href="/">
              <img alt="" src="logouticon"></img>Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  return <nav>{userRole.role === "manager" ? adminMenu : traineeMenu}</nav>;
}

export default Sidebar;
