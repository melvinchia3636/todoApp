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
        d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 8h18"
      />
      <path
        fill="currentColor"
        d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3V6z"
      />
    </svg>
  );
}
