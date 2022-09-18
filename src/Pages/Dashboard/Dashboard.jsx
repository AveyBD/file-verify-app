import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;