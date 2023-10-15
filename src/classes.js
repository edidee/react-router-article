import React from "react";
import { Link, Outlet } from "react-router-dom";

const classes = [
  { id: "year1", className: "Year 1" },
  { id: "year2", className: "Year 2" },
  
];

function Classes() {
  return (
    <div>
      <h2>Classes</h2>

      <ul>
        {classes.map((c) => (
          <li key={c.id}>
            <Link to={c.className}>{c.className}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default Classes;
