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
        d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v10a2 2 0 0 0 2 2h4M3 8h18m0 0v2"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M18 12v1h2a1 1 0 0 1 1 1v2h1a1 1 0 0 1 1 1 6 6 0 1 1-6-6 1 1 0 0 1 1 1zm-4 4a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1zm4 2a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2H18z"
        clip-rule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3V6z"
      />
    </svg>
  );
}