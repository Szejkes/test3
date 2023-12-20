/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PortraitPlaceholder = ({ union = "/img/union.svg" }) => {
  return (
    <div className="portrait-placeholder">
      <img className="union" alt="Union" src={union} />
    </div>
  );
};

PortraitPlaceholder.propTypes = {
  union: PropTypes.string,
};
