import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19h4m0 0v-4m0 4-4-4M9 5H5m0 0v4m0-4 4 4m6-4h4m0 0v4m0-4-4 4M9 19H5m0 0v-4m0 4 4-4"
      />
    </svg>
  );
}
