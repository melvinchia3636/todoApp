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
        d="M10 6v1m4-1v1m-6 4h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm2 8H9a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4h-1m-4 0v2m0-2h4m0 0v2"
      />
      <path
        fill="currentColor"
        d="M5 12a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-3z"
      />
    </svg>
  );
}
