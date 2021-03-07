import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  ROUTE_CODE,
  // ROUTE_CONTACT,
  ROUTE_ROOT,
} from "../routes";

export default function Navbar() {
  return (
    <header className="relative">
      <div className="absolute top-0 left-0 w-full md:h-20 bg-gray px-4 md:px-16 flex items-center justify-between">
        <h1 className="text-xl p-2 pl-0">
          <Link to={ROUTE_ROOT}>aleksanderwalczuk</Link>
        </h1>
        <nav>
          <ul className="flex">
            {/* <li className="md:p-2"><Link to={ROUTE_ROOT}>About</Link></li> */}
            {/* <li className="md:p-2"><Link to={ROUTE_CONTACT}>Contact</Link></li> */}
            <li className="md:p-2">
              <NavLink
                activeClassName="text-red-400"
                className="hover:underline"
                to={ROUTE_CODE}
              >
                Code
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
