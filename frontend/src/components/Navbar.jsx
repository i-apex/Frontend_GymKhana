import './Navbar.css';
import React, { useState } from 'react';
import logo from '../assets/logoiittp.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-between align-items-center" >
        <div className="navbar-brand">
          <img width={75} src={logo} alt="My Logo" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => handleLinkClick('HOME')}
                style={{ color: activeLink === 'HOME' ? 'rgb(17, 169, 255)' : 'black' }}
              >
                HOME
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => handleLinkClick('EVENTS')}
                style={{ color: activeLink === 'EVENTS' ? 'rgb(17, 169, 255)' : 'black' }}
              >
                EVENTS
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => handleLinkClick('AWARDS')}
                style={{ color: activeLink === 'AWARDS' ? 'rgb(17, 169, 255)' : 'black' }}
              >
                AWARDS
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => handleLinkClick('CONTACTS')}
                style={{ color: activeLink === 'CONTACTS' ? 'rgb(17, 169, 255)' : 'black' }}
              >
                CONTACTS
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => handleLinkClick('FAQ')}
                style={{ color: activeLink === 'FAQ' ? 'rgb(17, 169, 255)' : 'black' }}
              >
                FAQ
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
