/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  union: string;
  className: any;
  unionClassName: any;
}

export const ElementArrowDown = ({ union = "/img/union-17.svg", className, unionClassName }: Props): JSX.Element => {
  return (
    <div className={`element-arrow-down ${className}`}>
      <img className={`union ${unionClassName}`} alt="Union" src={union} />
    </div>
  );
};

ElementArrowDown.propTypes = {
  union: PropTypes.string,
};
