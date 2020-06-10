import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Integration from "./Integration";
import productTech from "../images/PR&T.png";
import "./Slide.css";

const Slide = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.background = "white";
  });

  return (
    <div>
      <div className="slide-header">
        <h1 style={{ color: "#e20074" }}>Performance Enginnering Status</h1>
        <div className="horizontal-center" style={{ display: "flex" }}>
          <div className="update">
            <span>{`Update as of UPDATE DATE & TIME`}</span>
          </div>
          <img src={productTech} alt="Product & Technology" />
        </div>
      </div>
      <Integration />
    </div>
  );
};

export default connect(null, null)(Slide);
