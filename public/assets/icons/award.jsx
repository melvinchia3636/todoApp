import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="9"
        r="7"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 20.234V14c.667.667 2.6 2 5 2s4.333-1.333 5-2v6.234a1 1 0 0 1-1.514.857l-2.972-1.782a1 1 0 0 0-1.028 0L8.514 21.09A1 1 0 0 1 7 20.234z"
      />
    </svg>
  );
}
