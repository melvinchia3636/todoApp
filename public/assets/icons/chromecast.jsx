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
        d="M3 20h.01M7 20a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 4H5a2 2 0 0 0-2 2v2.5c4 .167 12 2.7 12 11.5h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
      />
    </svg>
  );
}
