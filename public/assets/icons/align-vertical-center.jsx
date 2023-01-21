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
        d="M8 20a2 2 0 0 1-2-2V6a2 2 0 1 1 4 0v12a2 2 0 0 1-2 2zm8-3a2 2 0 0 1-2-2V9a2 2 0 1 1 4 0v6a2 2 0 0 1-2 2z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 12v6a2 2 0 1 0 4 0v-6m-4 0V6a2 2 0 1 1 4 0v6m-4 0H3m7 0h4m0 0v3a2 2 0 1 0 4 0v-3m-4 0V9a2 2 0 1 1 4 0v3m0 0h3"
      />
    </svg>
  );
}
