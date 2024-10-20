import React from "react";
import "./Started.css";

const Started = () => {
  return (
    <section className="innerWidth paddings s-wrapper">
      <div className="flexColCenter paddings s-container">
        <span className="primaryText">Get started with Homyz</span>
        <div className="flexColCenter s-details">
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
          </span>
          <span className="secondaryText">Find your residence soon</span>
        </div>
        <button className="started-button">Get Started</button>
      </div>
    </section>
  );
};

export default Started;
