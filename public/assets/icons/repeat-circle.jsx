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
        d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zM10.707 6.707a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L10.414 9H14a1 1 0 0 1 1 1v1a1 1 0 1 0 2 0v-1a3 3 0 0 0-3-3h-3.586l.293-.293zM9 13a1 1 0 1 0-2 0v1a3 3 0 0 0 3 3h3.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H10a1 1 0 0 1-1-1v-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
