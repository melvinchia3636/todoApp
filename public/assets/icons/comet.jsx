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
        d="m9.879 5.636.707-.707a6 6 0 0 1 8.485 8.485l-2.121 2.122M7.757 7.757 5.636 9.88M3.515 12l-.707.707m12.02 4.95-1.414 1.414m-.707-4.95-.707.707M9.879 16.95l-2.122 2.12m2.122-7.778-6.364 6.364"
      />
      <circle
        cx="14.828"
        cy="9.172"
        r="2"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        transform="rotate(45 14.828 9.172)"
      />
    </svg>
  );
}
