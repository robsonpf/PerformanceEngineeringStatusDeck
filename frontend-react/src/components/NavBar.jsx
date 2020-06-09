import React, { useState, } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators, } from  'redux';
import { Button, Dropdown, } from 'semantic-ui-react';
import { createSlide, } from '../redux/actions/slide';
import './NavBar.css';
import tmo from '../images/TMO_LOGO.png';

const NavBar = (props) => {
  console.log(props);
  const { createSlide } = props;
  const handleSlide = () => {
    console.log('handleSlide'
    // createSlide
  );
  }

  return (
    <div id="navbar">
      <img src={tmo} alt="T-Mobile" />
      <div className="slide-buttons">
        <Button onClick={() => createSlide()} content="Add Slide" />
        <Dropdown
          text="Slides"
        button>

        </Dropdown>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createSlide
}, dispatch)

export default connect(null, mapDispatchToProps)(NavBar);
