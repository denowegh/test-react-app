/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ElementArrowLeft } from "../ElementArrowLeft";
import "./style.css";

interface Props {
  className: any;
  elementArrowLeftUnion: string;
  elementArrowLeftUnionClassName: any;
}

export const SeparateArrow = ({
  className,
  elementArrowLeftUnion = "/img/union-18.svg",
  elementArrowLeftUnionClassName,
}: Props): JSX.Element => {
  return (
    <div className={`separate-arrow ${className}`}>
      <ElementArrowLeft
        className="element-px-arrow-left"
        union={elementArrowLeftUnion}
        unionClassName={elementArrowLeftUnionClassName}
      />
    </div>
  );
};

SeparateArrow.propTypes = {
  elementArrowLeftUnion: PropTypes.string,
};
