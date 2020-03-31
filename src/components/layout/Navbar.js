import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <nav>
    <div className="nav-wrapper grey darken-2">
      <a href="#!" className="brand-logo center">Logo</a>
      <ul className="left hide-on-med-and-down">
        <li className="active"><Link to="/">Step one</Link></li>
        <li style={{ marginLeft: '30px'}}><Link to="/steptwo">Step two</Link></li>
        <li style={{ marginLeft: '30px'}}><Link to="/begrunn">Begrunn</Link></li>
        <li style={{ marginLeft: '30px'}}><Link to="/stepfour">Step four</Link></li>
      </ul>
    </div>
  </nav>
  )
}
export  default Navbar;