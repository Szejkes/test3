/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MainCta = ({ className, text = "Main Cta Button" }) => {
  return (
    <div className={`main-CTA ${className}`}>
      <div className="request-an-estimate">{text}</div>
    </div>
  );
};

MainCta.propTypes = {
  text: PropTypes.string,
};
