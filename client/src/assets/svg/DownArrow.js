import React from "react";

export const DownArrowActive = () => {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon iconArrowDownLg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      <path fill="#F48024" d="M2 10h32L18 26 2 10z"></path>
    </svg>
  );
};

export const DownArrowInactive = () => {
	return (
	  <svg
		aria-hidden="true"
		className="svg-icon iconArrowDownLg"
		width="36"
		height="36"
		viewBox="0 0 36 36"
	  >
		<path fill="#C1BEBC" d="M2 10h32L18 26 2 10z"></path>
	  </svg>
	);
  };
