import React, { useState, useEffect, } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators, } from  'redux';
import { Button, Dropdown, } from 'semantic-ui-react';
import { createSlide, } from '../redux/actions/slide';
import DropdownItemList from './DropdownItemList';
import './NavBar.css';
import tmo from '../images/TMO_LOGO.png';

const NavBar = (props) => {
  const { createSlide, history, slides } = props;

  return (
    <div id="navbar">
      <img src={tmo} alt="T-Mobile" />
      <div className="slide-buttons">
        <Button onClick={() => createSlide(history)} content="Add Slide" />
        <Dropdown
          button
          selection
          text="Slides">
            <Dropdown.Menu>
              <DropdownItemList slides={slides} />
            </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    slides: state.slide.slides,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createSlide
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
