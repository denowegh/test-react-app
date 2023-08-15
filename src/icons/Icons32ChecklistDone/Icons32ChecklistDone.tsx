/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Icons32ChecklistDone = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icons-32-checklist-done ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="16" cy="16" fill="#5CD6C0" r="16" />
      <path
        className="path-2"
        d="M11.1304 16.2321L15.2645 19.9423L20.7767 12.522"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};
