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
        d="M17 5h-7a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h7M7 19h7a3 3 0 0 0 3-3v-1M5 12h14"
      />
    </svg>
  );
}
