import React, { useState, useEffect } from 'react';
import { connect, } from 'react-redux';
import './Slide.css';


const Slide = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.background = 'white';
  });

  return (
    <div>
      Slide Component


    </div>
  );
}

export default connect(null, null)(Slide);
