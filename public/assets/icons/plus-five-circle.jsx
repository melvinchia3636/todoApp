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
        d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zm-9-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H14a1 1 0 1 0 0 2h1.5a2.5 2.5 0 0 0 0-5H15v-1h2a1 1 0 1 0 0-2h-3zm-4 2a1 1 0 1 0-2 0v1H7a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
