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
        d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0zm8-3a1 1 0 1 0-2 0v3a1 1 0 0 0 .553.894l2 1a1 1 0 1 0 .894-1.788L13 11.382V9z"
        clip-rule="evenodd"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 6.5V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3.5m6 11V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3.5"
      />
    </svg>
  );
}
