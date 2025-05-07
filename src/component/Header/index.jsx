import React from 'react';
import Heading from '../Heading bar';
import Navbar from '../Navbar';

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white ">
      <Heading />
      <Navbar />
    </div>
  );
}

export default Header;
