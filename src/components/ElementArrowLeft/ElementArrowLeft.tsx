/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  unionClassName: any;
  union: string;
  className: any;
}

export const ElementArrowLeft = ({ unionClassName, union = "/img/union-18.svg", className }: Props): JSX.Element => {
  return (
    <div className={`element-arrow-left ${className}`}>
      <img className={`img ${unionClassName}`} alt="Union" src={union} />
    </div>
  );
};

ElementArrowLeft.propTypes = {
  union: PropTypes.string,
};
