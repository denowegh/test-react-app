/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconsChecklistAlert = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icons-checklist-alert ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_0_1228)">
        <circle className="circle" cx="12" cy="12" fill="#483FDD" r="12" />
        <circle className="circle" cx="12" cy="12" fill="white" r="6" />
        <path className="path-2" d="M12 2.75V4" stroke="#5CD6C0" strokeLinecap="round" strokeWidth="2" />
        <path
          className="path-2"
          d="M11.4542 17.25H12.5458C13.1318 17.25 13.4577 17.9279 13.0916 18.3856C12.532 19.0851 11.468 19.0851 10.9084 18.3856C10.5423 17.9279 10.8682 17.25 11.4542 17.25Z"
          fill="white"
        />
        <path
          className="path-2"
          clipRule="evenodd"
          d="M12 8C12.5523 8 13 8.44772 13 9L12.75 12C12.75 12.5523 12.5523 13 12 13C11.4477 13 11.25 12.5523 11.25 12L11 9C11 8.44772 11.4477 8 12 8Z"
          fill="#151D51"
          fillRule="evenodd"
        />
        <path className="path-2" d="M21.25 12L20 12" stroke="#5CD6C0" strokeLinecap="round" strokeWidth="2" />
        <path className="path-2" d="M4 12L2.75 12" stroke="#5CD6C0" strokeLinecap="round" strokeWidth="2" />
        <path
          className="path-2"
          d="M6.34314 6.34314L5.45926 5.45926"
          stroke="#5CD6C0"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          className="path-2"
          d="M17.6571 6.34314L18.541 5.45926"
          stroke="#5CD6C0"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <ellipse className="ellipse-14" cx="12" cy="14.75" fill="#151D51" rx="1" ry="1" />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_0_1228">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
