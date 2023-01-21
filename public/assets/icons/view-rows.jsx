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
        d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3H2zm0 2v4h20v-4H2zm20 6H2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
