/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconsChecklistAntivirus = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icons-checklist-antivirus ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_0_1096)">
        <circle className="circle" cx="12" cy="12" fill="#483FDD" r="12" />
        <path
          className="path-2"
          d="M5 7.65029C5 7.04328 5.36363 6.49533 5.92296 6.25951L9.20405 4.87613C10.9119 4.15607 12.8381 4.15607 14.546 4.87613L17.827 6.25951C18.3864 6.49533 18.75 7.04328 18.75 7.65029V13.375C18.75 17.172 15.672 20.25 11.875 20.25C8.07804 20.25 5 17.172 5 13.375V7.65029Z"
          fill="#5CD6C0"
        />
        <circle className="circle" cx="11.875" cy="11.875" fill="white" r="4.125" />
        <rect
          className="rect"
          fill="#483FDD"
          fillOpacity="0.6"
          height="3.96269"
          rx="0.912262"
          transform="matrix(0.707842 -0.706371 0.707842 0.706371 8.5 11.8505)"
          width="1.82452"
        />
        <rect
          className="rect"
          fill="#483FDD"
          height="5.45339"
          rx="0.898889"
          transform="matrix(-0.726383 -0.68729 -0.688796 0.724955 15.2173 10.7356)"
          width="1.79778"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_0_1096">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
