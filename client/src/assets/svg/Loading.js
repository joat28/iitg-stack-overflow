import React from "react";

const Upvotes = () => {
  return (
    //     <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="203px" height="203px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    // <rect x="17.5" y="25" width="15" height="50" fill="#f9ba86">
    //   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="12.5;25;25" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"/>
    //   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="75;50;50" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"/>
    // </rect>
    // <rect x="42.5" y="25" width="15" height="50" fill="#f69e55">
    //   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="15.625;25;25" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"/>
    //   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="68.75;50;50" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"/>
    // </rect>
    // <rect x="67.5" y="25" width="15" height="50" fill="#f48024">
    //   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="15.625;25;25" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"/>
    //   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="68.75;50;50" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"/>
    // </rect>
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="60%"
      height="50%"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <rect width="15" height="40" x="17.5" y="30" fill="#f9ba86">
        <animate
          attributeName="y"
          begin="-0.4s"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="10;30;30"
        />
        <animate
          attributeName="height"
          begin="-0.4s"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="80;40;40"
        />
      </rect>
      <rect width="15" height="40" x="42.5" y="30" fill="#f69e55">
        <animate
          attributeName="y"
          begin="-0.2s"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="15;30;30"
        />
        <animate
          attributeName="height"
          begin="-0.2s"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="70;40;40"
        />
      </rect>
      <rect width="15" height="40" x="67.5" y="30" fill="#f48024">
        <animate
          attributeName="y"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="15;30;30"
        />
        <animate
          attributeName="height"
          calcMode="spline"
          dur="2s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="70;40;40"
        />
      </rect>
    </svg>
  );
};

export default Upvotes;
