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
        cx="6"
        cy="6"
        r="3"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <circle
        cx="18"
        cy="6"
        r="3"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <circle
        cx="12"
        cy="18"
        r="3"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        stroke="currentColor"
        stroke-width="2"
        d="M6 9v1a2 2 0 0 0 2 2h4m6-3v1a2 2 0 0 1-2 2h-4m0 0v3"
      />
    </svg>
  );
}
