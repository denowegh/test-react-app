/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  union: string;
}

export const ElementDownload = ({ union = "/img/union-21.svg" }: Props): JSX.Element => {
  return (
    <div className="element-download">
      <img className="union-2" alt="Union" src={union} />
    </div>
  );
};

ElementDownload.propTypes = {
  union: PropTypes.string,
};
