import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = <>
  <li><Link to='/Home'>HOME</Link></li>
  <li><Link to='/parts'>Pricing</Link></li>
  <li><Link to='/blogs'>BLOGS</Link></li>
  <li><Link to='/dashboard'>DASHBOARD</Link></li>
  <li className="lg:ml-60"><Link to='/login'>Login</Link></li>
</>
  return (
    <div>
      <div className="navbar bg-base-100 border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">FileCheckApp</a>
        </div>
        <div className=" hidden lg:flex">
          <ul className=" navbar-center menu menu-horizontal p-0">
           {navItems}
          </ul>        
        </div>
        <div className="navbar-end lg:w-8">
      <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
      
      </div>
      </div>
    </div>
  );
};

export default Navbar;
