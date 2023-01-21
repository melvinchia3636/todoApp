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
        d="M19 17v4c-2.758 0-5.07-.495-7-1.325-3.841-1.652-6.176-4.63-7.5-7.675C3.4 9.472 3 6.898 3 5h4l1 4-3.5 3c1.324 3.045 3.659 6.023 7.5 7.675L15 16l4 1z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 19.675c1.93.83 4.242 1.325 7 1.325v-4l-4-1-3 3.675zm0 0C8.159 18.023 5.824 15.045 4.5 12m0 0C3.4 9.472 3 6.898 3 5h4l1 4-3.5 3zM14 4h.01M17 4h.01M20 4h.01M14 7h.01M17 7h.01M20 7h.01M14 10h.01M17 10h.01M20 10h.01"
      />
    </svg>
  );
}
