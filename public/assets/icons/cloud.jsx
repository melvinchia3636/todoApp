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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M2 13.5C2 17.9 5.667 19 7.5 19h10c1.5 0 4.5-.9 4.5-4.5S19 10 17.5 10c0-1.5-1.5-5-5-5-2.8 0-4.5 2-5 3C5.667 8 2 9.1 2 13.5z"
      />
    </svg>
  );
}
