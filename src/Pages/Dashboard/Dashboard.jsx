import React from "react";
import { Outlet, Link } from "react-router-dom";
import DashNav from "../Shared/DashNav";

const Dashboard = () => {
  return (
    <div>
      <DashNav />
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div class="drawer-side mt-16">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">Dashboard Home</Link>
            </li>
            <li>
              <a>Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
