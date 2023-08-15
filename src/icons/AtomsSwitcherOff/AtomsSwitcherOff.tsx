/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const AtomsSwitcherOff = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`atoms-switcher-off ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#151D51" height="28" opacity="0.3" rx="14" width="48" y="10" />
      <path
        className="path-2"
        clipRule="evenodd"
        d="M14 34C19.5228 34 24 29.5228 24 24C24 18.4772 19.5228 14 14 14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
};
