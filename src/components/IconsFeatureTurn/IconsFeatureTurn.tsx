/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
  rectangleClassName: any;
  rectangleClassNameOverride: any;
}

export const IconsFeatureTurn = ({ className, rectangleClassName, rectangleClassNameOverride }: Props): JSX.Element => {
  return (
    <div className={`icons-feature-turn ${className}`}>
      <div className={`rectangle ${rectangleClassName}`} />
      <div className={`rectangle-2 ${rectangleClassNameOverride}`} />
    </div>
  );
};
