import React, { useState, } from 'react';
import { connect, } from 'react-redux';
import { Button, Dropdown, } from 'semantic-ui-react';

import './NavBar.css';
import tmo from '../images/TMO_LOGO.png';

const NavBar = () => {
  return (
    <div id="navbar">
      <img src={tmo} alt="T-Mobile" />
      <div className="slide-buttons">
        <Button content="Add Slide" />
        <Dropdown 
          text="Slides"
          button>

        </Dropdown>
      </div>
    </div>
  );
};

export default connect(null, null)(NavBar);