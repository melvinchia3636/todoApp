import React from "react";

function Icon({ className }) {
  return (
    <svg
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2.4"
        d="M3 6h18M6 12h12m-9 6h6"
      />
    </svg>
  );
}

export default Icon;
