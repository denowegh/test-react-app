/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconsStepBack = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icons-step-back ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-2"
        d="M21.0113 25.633C20.6247 26.0096 20.0069 26.0048 19.6262 25.6222L10 15.9536L19.6365 6.27744C20.0035 5.90872 20.5999 5.90735 20.9687 6.27438L20.9717 6.27744C21.3409 6.64836 21.341 7.24793 20.9718 7.61888L12.6688 15.9563L21.0183 24.2661C21.3939 24.6396 21.3955 25.2468 21.022 25.6223C21.0185 25.6259 21.0149 25.6294 21.0113 25.633Z"
        fill="white"
      />
    </svg>
  );
};
