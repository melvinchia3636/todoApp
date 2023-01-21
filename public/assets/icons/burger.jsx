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
        d="m14 15 3.172-3.172a2.83 2.83 0 0 1 2-.828H20a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h3.657c1.5 0 2.939.596 4 1.657L14 15z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 15h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2z"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M5.467 4.554C7.27 3.457 9.58 3 12 3s4.73.457 6.533 1.554c1.844 1.121 3.109 2.886 3.402 5.328C22.082 11.106 21.067 12 20 12H4c-1.067 0-2.082-.894-1.935-2.118.293-2.442 1.558-4.207 3.402-5.328zM7 6a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2H7zm8 1a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1zm-4 1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2H11z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
