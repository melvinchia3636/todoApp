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
        d="M7 17v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2M7 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1m0 0V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M6 7h12m0 0h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V9zm5 0a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2H7z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
