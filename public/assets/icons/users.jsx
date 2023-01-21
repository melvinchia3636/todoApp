import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="9"
        cy="9"
        r="4"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 13c-3.866 0-7 2.686-7 6h14c0-3.314-3.134-6-7-6z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 13a4 4 0 1 0-3-6.646m0 5.411c.897.942 2.193 1.235 3 1.235 3.866 0 7 2.686 7 6h-6"
      />
    </svg>
  );
}
