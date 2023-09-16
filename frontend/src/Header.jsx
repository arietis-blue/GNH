import React from 'react';
// import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {
  return (
    <header className="bg-green-300 text-black font-bold p-5 flex items-center justify-between">
      <div className="bg-green-800 rounded-lg text-white font-bold p-5 items-center justify-center">
        <h1 className="text-2xl">Kyoto Sight Info</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Restaurant</Link></li>
          <li><Link to="/projects">Morning</Link></li> */}
          <li><Login /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
