/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SocialIcons = ({
  className,
  shape = "/img/shape.svg",
  facebook = "/img/facebook.svg",
  combinedShape = "/img/combined-shape.svg",
}) => {
  return (
    <div className={`social-icons ${className}`}>
      <img className="shape" alt="Shape" src={shape} />
      <img className="facebook" alt="Facebook" src={facebook} />
      <img className="combined-shape" alt="Combined shape" src={combinedShape} />
    </div>
  );
};

SocialIcons.propTypes = {
  shape: PropTypes.string,
  facebook: PropTypes.string,
  combinedShape: PropTypes.string,
};
