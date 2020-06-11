import React from 'react';
import { connect, } from 'react-redux';
import MonthRelease from './MonthRelease';
import Status from './Status';
import FutureRelease from './FutureRelease'
import './Integration.css';

const Integration = (props) => {
  return (
    <div id="integration">
      <MonthRelease />
      <Status />
      <FutureRelease />
    </div>
  );
};

export default connect(null, null)(Integration);
