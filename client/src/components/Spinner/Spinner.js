import React from "react";
import SpinnerLogo from "../../assets/svg/Loading";

const Spinner = () => {
  return (
    <div className="fixed top-1/3 left-1/2">
      <SpinnerLogo />
    </div>
  );
};

export default Spinner;
