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
        d="M4 8h.001M20 8h.001M20 12h.001M20 16h.001M20 20h.001M16 20h.001M4 4h.001M8 4h.001M12 4h.001M16 4h.001M20 4h.001"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M3 13a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v1h-1c-1.14 0-2.624.28-3.85 1.2C7.876 16.156 7 17.715 7 20v1H6a3 3 0 0 1-3-3v-5zm6 8h2a3 3 0 0 0 3-3v-2h-1c-.86 0-1.876.22-2.65.8C9.624 17.344 9 18.285 9 20v1zm-3-9a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H6z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
