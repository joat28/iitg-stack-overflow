import React from "react";

export const UpArrowInactive = () => {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon iconArrowUpLg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      <path fill="#C1BEBC" d="M2 26h32L18 10 2 26z"></path>
    </svg>
  );
};

export const UpArrowActive = () => {
    return (
      <svg
        aria-hidden="true"
        className="svg-icon iconArrowUpLg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path fill="#F48024" d="M2 26h32L18 10 2 26z"></path>
      </svg>
    );
  };


