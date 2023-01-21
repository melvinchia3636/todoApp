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
        d="M4 5h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 5H4v7a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V5zm0 0h2v0a2 2 0 0 1 2 2v4M4 19h14"
      />
    </svg>
  );
}
