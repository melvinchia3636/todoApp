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
        d="M4 8a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2zm3 8a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6H6a2 2 0 1 0 0 4h6m0-4h6a2 2 0 1 1 0 4h-6m0-4V3m0 7v4m0 0H9a2 2 0 1 0 0 4h3m0-4h3a2 2 0 1 1 0 4h-3m0 0v3"
      />
    </svg>
  );
}
