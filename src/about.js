import React from "react";
import { Link, Outlet } from "react-router-dom";



function About() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about/classes">Classes</Link>
        </li>
      </ul>

     <Outlet />
    </div>
  );
}

export default About;
