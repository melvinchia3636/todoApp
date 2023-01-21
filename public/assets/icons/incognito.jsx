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
        fill="currentColor"
        d="M19 6v5H5V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 11h2m16.5 0H19m0 0V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5m14 0H5"
      />
      <circle
        cx="7"
        cy="17"
        r="3"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <circle
        cx="17"
        cy="17"
        r="3"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 16h4"
      />
    </svg>
  );
}
