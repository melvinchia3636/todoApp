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
        d="M6 19v0a2 2 0 0 1-2-2v-4m2 6v1.5a.5.5 0 0 0 .5.5v0a.5.5 0 0 0 .5-.5V19m-1 0h1m11 0v0a2 2 0 0 0 2-2v-4m-2 6v1.5a.5.5 0 0 1-.5.5v0a.5.5 0 0 1-.5-.5V19m1 0h-1M4 13V7m0 6h8m8 0V7m0 6h-8m-5 6h10M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 7h8m8 0h-8m0 0v6"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M4 13h16v6H4v-6zm3 3a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm9-1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2H16z"
        clip-rule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H4V5z"
      />
    </svg>
  );
}
