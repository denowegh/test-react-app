/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SeparateArrow } from "../SeparateArrow";
import "./style.css";

interface Props {
  className: any;
  separateArrowElementArrowLeftUnion: string;
  separateArrowElementArrowLeftUnionClassName: any;
}

export const SeparatePxArrow = ({
  className,
  separateArrowElementArrowLeftUnion = "/img/union-20.svg",
  separateArrowElementArrowLeftUnionClassName,
}: Props): JSX.Element => {
  return (
    <div className={`separate-px-arrow ${className}`}>
      <SeparateArrow
        className="separate-24px-arrow-left"
        elementArrowLeftUnion={separateArrowElementArrowLeftUnion}
        elementArrowLeftUnionClassName={separateArrowElementArrowLeftUnionClassName}
      />
    </div>
  );
};

SeparatePxArrow.propTypes = {
  separateArrowElementArrowLeftUnion: PropTypes.string,
};
