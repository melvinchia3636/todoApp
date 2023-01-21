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
        d="M19 15h-4m0 0v4m0-4 4 4M5 9h4m0 0V5m0 4L5 5m14 4h-4m0 0V5m0 4 4-4M5 15h4m0 0v4m0-4-4 4"
      />
    </svg>
  );
}
