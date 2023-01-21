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
        fill-rule="evenodd"
        d="M3 12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7zm10 2a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3z"
        clip-rule="evenodd"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 10V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v3"
      />
    </svg>
  );
}
