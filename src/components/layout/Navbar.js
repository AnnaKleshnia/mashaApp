import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-2">
        <a href="#!" className="brand-logo center">
          Logo
        </a>
        <ul className="left hide-on-med-and-down">
          <li className="active">
            <a href="/">Step one</a>
          </li>
          <li style={{ marginLeft: '30px' }}>
            <a href="/steptwo">Step two</a>
          </li>
          <li style={{ marginLeft: '30px' }}>
            <a href="/begrunn">Begrunn</a>
          </li>
          <li style={{ marginLeft: '30px' }}>
            <a href="/stepfour">Step four</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
