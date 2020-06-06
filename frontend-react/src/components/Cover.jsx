import React, { useState, useEffect, } from 'react';
import { connect, } from 'react-redux';

import './Cover.css';
import pes from '../images/PES.png';

const Cover = () => {
  useEffect(() => {
    // change background color when Cover component has mounted
    const body = document.querySelector('body');
    body.style.background = '#e20074';
  });

  return (
    <div id="cover">
      <div className="header mb-space-l">Performance Engineering Status</div>
      <marquee behavior="scroll" bgcolor="#E20074" loop="-1" width="30%">
        <h1 style={{ color: 'white' }}> 
          As of
          <span id="today"> *UPDATE THE DAY HERE*</span>
        </h1>
      </marquee>
      <img style={{ width: '450px' }} src={pes} alt="Performace Engineering Status"/>
    </div>
  );
};

export default connect(null, null)(Cover);