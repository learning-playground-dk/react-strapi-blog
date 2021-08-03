import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Homepage</h1>
      </Link>
    </div>
  );
};

export default Navbar;
